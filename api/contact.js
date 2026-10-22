// Vercel Function: emails contact form submissions through Resend (https://resend.com/docs/api-reference/emails/send-email).
// Environment variables (set in Vercel > Project > Settings > Environment Variables):
//   RESEND_API_KEY      required
//   CONTACT_FROM_EMAIL  required, a sender on a domain verified in Resend, e.g. "Texas Vending <forms@texasvending.com>"
//   CONTACT_TO_EMAIL    optional, defaults to hi@texasvending.com
// The form posts as a normal HTML form, so it works without JavaScript; every outcome is a 303 redirect.

const TO_DEFAULT = 'hi@texasvending.com';
const FIELDS = ['name', 'company', 'email', 'phone', 'city', 'footTraffic', 'message'];
const MAX_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const redirect = (location) => new Response(null, { status: 303, headers: { Location: location } });

export async function POST(request) {
	let form;
	try {
		form = await request.formData();
	} catch {
		return redirect('/contact-us/?error=missing#contact-form');
	}

	// Bots fill the hidden "website" field; pretend success and send nothing
	if (form.get('website')) return redirect('/thank-you/');

	const data = Object.fromEntries(FIELDS.map((key) => [key, String(form.get(key) ?? '').trim().slice(0, MAX_LENGTH)]));
	const interests = form.getAll('interest').map(String).join(', ');
	if (!data.name || !data.message || !EMAIL_PATTERN.test(data.email)) {
		return redirect('/contact-us/?error=missing#contact-form');
	}

	const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
	if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
		console.error('Contact form: RESEND_API_KEY or CONTACT_FROM_EMAIL is not set');
		return redirect('/contact-us/?error=send#contact-form');
	}

	const text = [
		`Name: ${data.name}`,
		`Company: ${data.company || '-'}`,
		`Email: ${data.email}`,
		`Phone: ${data.phone || '-'}`,
		`City: ${data.city || '-'}`,
		`Foot traffic (employees + visitors): ${data.footTraffic || '-'}`,
		`Interested in: ${interests || '-'}`,
		'',
		data.message,
	].join('\n');

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: CONTACT_FROM_EMAIL,
			to: [CONTACT_TO_EMAIL || TO_DEFAULT],
			reply_to: data.email,
			subject: `Website inquiry from ${data.name}${data.company ? `, ${data.company}` : ''}`,
			text,
		}),
	});

	if (!res.ok) {
		console.error('Contact form: Resend returned', res.status, await res.text());
		return redirect('/contact-us/?error=send#contact-form');
	}
	return redirect('/thank-you/');
}
