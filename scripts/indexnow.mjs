// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, and other participating search engines).
// Run after a deploy:  npm run indexnow
// The key file public/<KEY>.txt must be live at https://texasvending.com/<KEY>.txt before submitting.
const SITE = 'https://texasvending.com';
const KEY = '5834410caa09fe8cfc6167a0f664fc8a';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const text = async (url) => {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`${url} -> ${res.status}`);
	return res.text();
};
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if ((await text(`${SITE}/${KEY}.txt`)).trim() !== KEY) throw new Error('Live key file does not match KEY');

// The sitemap index lists one or more sitemap files; collect the page URLs from each
const urlList = [];
for (const sitemap of locs(await text(`${SITE}/sitemap-index.xml`))) urlList.push(...locs(await text(sitemap)));

const res = await fetch(ENDPOINT, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted and key validation pending
console.log(`Submitted ${urlList.length} URLs: ${res.status} ${res.statusText}`);
if (!res.ok) {
	console.error(await res.text());
	process.exit(1);
}
