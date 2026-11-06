export const SITE_NAME = 'Texas Vending';
export const SITE_URL = 'https://texasvending.com';

export const PHONE_DISPLAY = '(469) 304-9509';
export const PHONE_TEL = '+1-469-304-9509';
// Separate line that rings the moving team directly
export const MOVING_PHONE_DISPLAY = '(469) 881-9286';
export const MOVING_PHONE_TEL = '+1-469-881-9286';
export const EMAIL = 'hi@texasvending.com';
// Official social profiles. No Google Business Profile yet; add it here when one exists.
export const SOCIAL_LINKS = [
	{ name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61596037267366' },
	{ name: 'Instagram', href: 'https://www.instagram.com/texas_vending' },
];
/** One-line description used in schema and the footer */
export const BUSINESS_DESCRIPTION =
	'Free vending machines, micro markets, smart coolers, coffee service, vending repair, and vending moving for businesses across Dallas–Fort Worth and North Texas.';
// TODO: add the suite number once confirmed
export const ADDRESS = { street: '2777 N Stemmons Fwy', city: 'Dallas', region: 'TX', postalCode: '75207' };

export interface MenuItem {
	label: string;
	href: string;
	children?: MenuItem[];
}

// Matches the live texasvending.com main menu, labels and URLs included.
export const MAIN_MENU: MenuItem[] = [
	{
		label: 'Our Services',
		href: '/our-services/',
		children: [
			{ label: 'Micro Market', href: '/our-services/micro-markets/' },
			{ label: 'AI Smart Cooler', href: '/our-services/ai-smart-cooler/' },
			{ label: 'Coffee & Water', href: '/our-services/coffee-water/' },
			{ label: 'Vending Machine', href: '/our-services/vending-machine/' },
			{ label: 'Vending Repair', href: '/our-services/vending-repair/' },
			{ label: 'Vending Moving', href: '/our-services/vending-moving/' },
		],
	},
	{
		label: 'Fresh Food',
		href: '/fresh-food/',
		children: [
			{ label: 'Fresh Meals', href: '/fresh-food/' },
			{ label: 'Beverage Catalog', href: '/beverages/' },
		],
	},
	{ label: 'Equipment', href: '/equipment/' },
	{
		label: 'Industries We Serve',
		href: '/industries-we-serve/',
		children: [
			{ label: 'Auto Dealerships', href: '/industries-we-serve/auto-dealerships/' },
			{ label: 'Corporate Offices', href: '/industries-we-serve/corporate-offices/' },
			{ label: 'Data Centers', href: '/industries-we-serve/data-center/' },
			{ label: 'Education', href: '/industries-we-serve/education/' },
			{ label: 'Fitness and Recreation Center', href: '/industries-we-serve/fitness/' },
			{ label: 'Hospital', href: '/industries-we-serve/hospitals/' },
			{ label: 'Logistics & Distribution', href: '/industries-we-serve/logistics/' },
			{ label: 'Manufacturing Facilities', href: '/industries-we-serve/manufacturing-facilities/' },
			{ label: 'Transportation Hubs', href: '/industries-we-serve/transportation-hubs/' },
			{ label: 'Warehouses', href: '/industries-we-serve/warehouses/' },
		],
	},
	{
		label: 'About Us',
		href: '/about-us/',
		children: [
			{ label: 'Cities We Serve', href: '/about-us/cities/' },
			{ label: 'Blog', href: '/blog/' },
		],
	},
];
