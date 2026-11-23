// Weekly refresh schedule for the industry pages (owner request, 2026-11-22). On its date, a page gains the
// "cities we serve" section (src/components/IndustryCities.astro), a city FAQ, and "(Updated <date>)" in its title.
// .github/workflows/scheduled-publish.yml looks for today's date in this file and rebuilds the site that morning,
// so keep each date as a 'YYYY-MM-DD' string.
import { cities, type City, type IndustryKey } from './cities';

export interface IndustryUpdate {
	/** Day the refresh goes live, Dallas time */
	date: string;
	/** Short <title> used once the page is updated, before " (Updated <date>)" */
	title: string;
	/** Heading noun, e.g. "Warehouse Vending" becomes "Warehouse Vending in Your DFW City" */
	label: string;
	/** Who the page serves, e.g. "warehouses", used in the intro and FAQ */
	audience: string;
	/** City business areas to feature, as [city slug, business area name] from src/data/cities.ts */
	spotlights: [string, string][];
}

export const industryUpdates: Partial<Record<IndustryKey, IndustryUpdate>> = {
	datacenter: {
		date: '2026-11-22',
		title: 'Data Center Vending in DFW',
		label: 'Data Center Vending',
		audience: 'data centers',
		spotlights: [
			['irving', 'Longhorn Drive data center campus'],
			['plano', 'Legacy Business Park'],
			['desoto', 'Red Oak data center campuses'],
		],
	},
	warehouses: {
		date: '2026-11-30',
		title: 'Warehouse Vending in DFW',
		label: 'Warehouse Vending',
		audience: 'warehouses',
		spotlights: [
			['dallas', 'International Inland Port of Dallas'],
			['coppell', 'Southwest Coppell distribution zone'],
			['forney', 'Gateway'],
		],
	},
	logistics: {
		date: '2026-12-07',
		title: 'Logistics Vending in DFW',
		label: 'Logistics Vending',
		audience: 'logistics and distribution centers',
		spotlights: [
			['fort-worth', 'AllianceTexas'],
			['irving', 'DFW Airport grounds and Foreign Trade Zone No. 39'],
			['wylie', 'Wylie Intermodal Terminal'],
		],
	},
	manufacturing: {
		date: '2026-12-14',
		title: 'Manufacturing Vending in DFW',
		label: 'Manufacturing Vending',
		audience: 'manufacturing plants',
		spotlights: [
			['fort-worth', 'Air Force Plant 4 and NAS JRB Fort Worth'],
			['arlington', 'GM Arlington Assembly'],
			['sherman', 'GlobalWafers Sherman'],
		],
	},
	offices: {
		date: '2026-12-21',
		title: 'Corporate Office Vending in DFW',
		label: 'Office Vending',
		audience: 'corporate offices',
		spotlights: [
			['dallas', 'Downtown Dallas'],
			['plano', 'Legacy West'],
			['las-colinas', 'Las Colinas Urban Center'],
		],
	},
	hospitals: {
		date: '2026-12-28',
		title: 'Hospital Vending in DFW',
		label: 'Hospital Vending',
		audience: 'hospitals and medical offices',
		spotlights: [
			['dallas', 'Southwestern Medical District'],
			['fort-worth', 'Near Southside Medical District'],
			['plano', 'Preston Road and West Parker Road hospitals'],
		],
	},
	education: {
		date: '2027-01-04',
		title: 'Free School Vending Machines in DFW',
		label: 'School Vending',
		audience: 'schools and campuses',
		spotlights: [
			['arlington', 'University of Texas at Arlington'],
			['richardson', 'UT Dallas'],
			['allen', 'Collin College Technical Campus'],
		],
	},
	hospitality: {
		date: '2027-01-11',
		title: 'Hospitality Vending in DFW',
		label: 'Hospitality Vending',
		audience: 'hotels, apartments, and venues',
		spotlights: [
			['arlington', 'Entertainment District'],
			['las-colinas', 'Irving Convention Center at Las Colinas'],
			['frisco', 'PGA Frisco'],
		],
	},
	fitness: {
		date: '2027-01-18',
		title: 'Gym Vending in DFW',
		label: 'Gym Vending',
		audience: 'gyms and fitness centers',
		spotlights: [],
	},
	dealerships: {
		date: '2027-01-25',
		title: 'Auto Dealership Vending in DFW',
		label: 'Dealership Vending',
		audience: 'auto dealerships',
		spotlights: [],
	},
	transportation: {
		date: '2027-02-01',
		title: 'Transportation Hub Vending in DFW',
		label: 'Transportation Vending',
		audience: 'airports and transportation sites',
		spotlights: [
			['irving', 'DFW Airport grounds and Foreign Trade Zone No. 39'],
			['dallas', 'Love Field'],
			['addison', 'Addison Airport'],
		],
	},
};

export interface LiveIndustryUpdate extends IndustryUpdate {
	key: IndustryKey;
	short: string;
	long: string;
}

/** The page's refresh once its date has arrived in Dallas, otherwise null (the page renders as before). */
export function liveIndustryUpdate(key: IndustryKey): LiveIndustryUpdate | null {
	const update = industryUpdates[key];
	const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Chicago' }); // YYYY-MM-DD
	if (!update || update.date > today) return null;
	const date = new Date(`${update.date}T12:00:00Z`);
	const format = (month: 'short' | 'long') => date.toLocaleDateString('en-US', { month, day: 'numeric', year: 'numeric', timeZone: 'UTC' });
	return { ...update, key, short: format('short'), long: format('long') };
}

/** Cities whose focus includes the industry first, then every other city we serve */
export function citiesFor(key: IndustryKey): City[] {
	return [...cities.filter((city) => city.focus.includes(key)), ...cities.filter((city) => !city.focus.includes(key))];
}

/** FAQ naming the cities we serve, added to the page's FAQ list once the refresh is live */
export function cityFaq(update: LiveIndustryUpdate) {
	const names = citiesFor(update.key)
		.slice(0, 12)
		.map((city) => city.name);
	return {
		question: `Which DFW cities do you serve with ${update.label.toLowerCase()}?`,
		answer: `We serve ${update.audience} in every Dallas–Fort Worth city we cover, including ${names.slice(0, -1).join(', ')}, and ${names.at(-1)}, plus the rest of North Texas.`,
	};
}
