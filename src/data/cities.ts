// Cities We Serve. Each entry is one destination page at /about-us/cities/<slug>/ (Alliance has its own page).
// `includes` lists the source cities a destination page also covers. `photos` are file names in src/assets/cities/.

export type IndustryKey =
	| 'warehouses'
	| 'logistics'
	| 'manufacturing'
	| 'offices'
	| 'hospitals'
	| 'education'
	| 'fitness'
	| 'transportation'
	| 'dealerships'
	| 'hospitality'
	| 'datacenter';

export interface City {
	slug: string;
	name: string;
	/** Overrides the default /about-us/cities/<slug>/ URL */
	href?: string;
	region: string;
	county: string;
	highways: string;
	/** Two or three sentences about the local business landscape */
	local: string;
	focus: IndustryKey[];
	nearby: string[];
	includes?: string[];
	/** Six photos: hero first */
	photos: string[];
	faq?: { question: string; answer: string };
}

export const cities: City[] = [
	{
		slug: 'dallas',
		name: 'Dallas',
		region: 'Dallas and Central',
		county: 'Dallas County',
		highways: 'I-35E, I-30, I-45, US-75, I-635, and I-20',
		local:
			'Dallas is home base for Texas Vending. Our office sits on N Stemmons Freeway, so we reach Downtown, Uptown, the Design District, the Medical District, and the industrial areas along I-35E and I-20 every day.',
		focus: ['offices', 'hospitals', 'warehouses', 'hospitality'],
		nearby: ['irving', 'addison', 'richardson', 'farmers-branch', 'desoto'],
		photos: ['office-breakroom-coolers.png', 'micro-market-breakroom.jpeg', 'meeting-salads.jpg', 'vending-row.jpeg', 'coffee-station.jpg', 'warehouse-cafeteria.avif'],
		faq: {
			question: 'Where is your Dallas office?',
			answer: 'We are at 2777 N Stemmons Fwy, Dallas, TX 75207, close to Downtown, the Design District, and the Medical District.',
		},
	},
	{
		slug: 'fort-worth',
		name: 'Fort Worth',
		region: 'Fort Worth and Tarrant County',
		county: 'Tarrant County',
		highways: 'I-35W, I-30, I-20, and I-820',
		local:
			'Fort Worth mixes a growing downtown, the Near Southside medical district, and large logistics and manufacturing sites to the north around AllianceTexas. Many of those buildings run shifts around the clock.',
		focus: ['warehouses', 'logistics', 'manufacturing', 'hospitals'],
		nearby: ['alliance', 'keller', 'hurst', 'arlington', 'roanoke'],
		photos: ['distribution-breakroom.jpeg', 'workers-breakroom-vending.jpeg', 'smart-cooler-kiosk.jpeg', 'workers-lunch.avif', 'phone-pay-vending.jpg', 'micro-market-stations.jpg'],
	},
	{
		slug: 'alliance',
		name: 'Alliance',
		href: '/alliance-texas-vending-services/',
		region: 'Fort Worth and Tarrant County',
		county: 'Tarrant and Denton Counties',
		highways: 'I-35W and SH-114',
		local: 'AllianceTexas in north Fort Worth is one of the busiest logistics areas in North Texas.',
		focus: ['logistics', 'warehouses'],
		nearby: ['fort-worth', 'roanoke', 'keller'],
		photos: [],
	},
	{
		slug: 'arlington',
		name: 'Arlington',
		region: 'Fort Worth and Tarrant County',
		county: 'Tarrant County',
		highways: 'I-30, I-20, and SH-360',
		local:
			'Arlington sits between Dallas and Fort Worth. Its employers range from the entertainment district and UT Arlington to manufacturing and distribution sites along I-20 and SH-360.',
		focus: ['manufacturing', 'warehouses', 'education', 'hospitality'],
		nearby: ['fort-worth', 'euless', 'bedford', 'hurst', 'irving'],
		photos: ['plant-manager-vending.png', 'vending-row.jpeg', 'employee-cafeteria.png', 'smart-cooler-unlock.jpg', 'drink-coolers-snacks.webp', 'technician-vending.jpg'],
	},
	{
		slug: 'plano',
		name: 'Plano',
		region: 'Collin County and North',
		county: 'Collin and Denton Counties',
		highways: 'US-75, the Dallas North Tollway, the President George Bush Turnpike, and SH-121',
		local:
			'Plano has large corporate campuses in the Legacy area and along US-75, plus medical offices and tech sites across the city.',
		focus: ['offices', 'datacenter', 'hospitals'],
		nearby: ['richardson', 'allen', 'frisco', 'addison', 'mckinney'],
		photos: ['office-lounge-vending.png', 'micro-market-coffee.jpg', 'office-cafe.jpg', 'espresso.jpg', 'smart-coolers-kitchen.jpeg', 'office-campus.jpeg'],
		faq: {
			question: 'Can you serve a corporate campus with several buildings in Plano?',
			answer:
				'Yes. We walk the campus and recommend equipment for each building or floor, so people do not have to cross the campus for a snack or coffee.',
		},
	},
	{
		slug: 'irving',
		name: 'Irving',
		region: 'DFW Airport Area',
		county: 'Dallas County',
		highways: 'SH-114, SH-183, I-635, and Loop 12',
		local:
			'Irving sits next to DFW International Airport and includes the Las Colinas business district. The city has corporate offices, hotels, and distribution sites that serve the airport.',
		focus: ['offices', 'transportation', 'hospitality', 'logistics'],
		nearby: ['las-colinas', 'coppell', 'euless', 'farmers-branch', 'dallas'],
		photos: ['lobby-smart-vending.jpg', 'office-smart-fridge.webp', 'micro-market-fresh.png', 'team-break.jpg', 'smart-cooler-phone.jpg', 'distribution-breakroom.jpeg'],
	},
	{
		slug: 'las-colinas',
		name: 'Las Colinas',
		region: 'DFW Airport Area',
		county: 'Dallas County (Irving)',
		highways: 'SH-114, SH-161, and I-635',
		local:
			'Las Colinas is the business district inside Irving, with office towers around the Urban Center and Lake Carolyn. Many companies keep their headquarters or regional offices here.',
		focus: ['offices', 'hospitality', 'datacenter'],
		nearby: ['irving', 'coppell', 'farmers-branch', 'dallas'],
		photos: ['office-campus.jpeg', 'lounge-smart-coolers.png', 'micro-market-shelving.jpg', 'coffee-station.jpg', 'meeting-salads.jpg', 'smart-cooler-breakroom.jpeg'],
	},
	{
		slug: 'frisco',
		name: 'Frisco',
		region: 'Collin County and North',
		county: 'Collin and Denton Counties',
		highways: 'the Dallas North Tollway, SH-121, and US-380',
		local:
			'Frisco has grown fast, with new office buildings, sports and entertainment venues such as The Star, schools, and medical offices along the Dallas North Tollway and SH-121.',
		focus: ['offices', 'fitness', 'education', 'hospitals'],
		nearby: ['plano', 'prosper', 'the-colony', 'mckinney', 'allen'],
		photos: ['office-lounge.png', 'smart-cooler-fresh-food.jpeg', 'team-lunch.jpg', 'smart-cooler-unlock.jpg', 'micro-market-breakroom.jpeg', 'lobby-smart-vending.jpg'],
	},
	{
		slug: 'keller',
		name: 'Keller',
		region: 'Fort Worth and Tarrant County',
		county: 'Tarrant County',
		highways: 'US-377 and Keller Parkway',
		local:
			'Keller is a residential and retail city in northeast Tarrant County, close to AllianceTexas. Local employers include schools, medical offices, fitness centers, and small business offices.',
		focus: ['education', 'fitness', 'offices', 'hospitals'],
		nearby: ['alliance', 'southlake', 'roanoke', 'hurst', 'fort-worth'],
		photos: ['smart-coolers-kitchen.jpeg', 'texas-vending-coolers.png', 'team-break.jpg', 'smart-cooler-phone.jpg', 'micro-market-coffee.jpg', 'full-line-vending.jpeg'],
	},
	{
		slug: 'coppell',
		name: 'Coppell',
		region: 'DFW Airport Area',
		county: 'Dallas and Denton Counties',
		highways: 'I-635 and SH-121',
		local:
			'Coppell sits on the north side of DFW International Airport. Its business parks hold distribution centers, warehouses, and corporate offices that run long hours.',
		focus: ['warehouses', 'logistics', 'offices'],
		nearby: ['irving', 'las-colinas', 'carrollton', 'farmers-branch', 'southlake'],
		photos: ['warehouse-worker-break.avif', 'drink-coolers-kiosk.jpeg', 'worker-cashless-cooler.webp', 'workers-lunch.avif', 'multi-door-cooler.jpeg', 'office-breakroom-coolers.png'],
	},
	{
		slug: 'addison',
		name: 'Addison',
		region: 'Dallas and Central',
		county: 'Dallas County',
		highways: 'the Dallas North Tollway and Belt Line Road',
		local:
			'Addison is a compact town packed with office towers along the Dallas North Tollway, a busy restaurant scene on Belt Line Road, and Addison Airport.',
		focus: ['offices', 'hospitality', 'transportation'],
		nearby: ['dallas', 'farmers-branch', 'richardson', 'carrollton', 'plano'],
		photos: ['office-cafe.jpg', 'lobby-smart-vending.jpg', 'micro-market-coffee.jpg', 'espresso.jpg', 'office-smart-fridge.webp', 'smart-cooler-breakroom.jpeg'],
	},
	{
		slug: 'allen',
		name: 'Allen',
		region: 'Collin County and North',
		county: 'Collin County',
		highways: 'US-75 and SH-121',
		local:
			'Allen has corporate offices and medical buildings along US-75 and SH-121, plus retail around Watters Creek.',
		focus: ['offices', 'hospitals', 'fitness', 'education'],
		nearby: ['plano', 'mckinney', 'richardson', 'frisco', 'wylie'],
		photos: ['lounge-smart-coolers.png', 'micro-market-stations.jpg', 'team-lunch.jpg', 'coffee-station.jpg', 'smart-cooler-kiosk.jpeg', 'office-lounge.png'],
	},
	{
		slug: 'rowlett',
		name: 'Rowlett',
		region: 'East of Dallas',
		county: 'Dallas and Rockwall Counties',
		highways: 'the President George Bush Turnpike',
		local:
			'Rowlett sits on the shore of Lake Ray Hubbard, east of Dallas. Its employers include schools, medical offices, light industrial shops, and local businesses.',
		focus: ['education', 'hospitals', 'offices', 'manufacturing'],
		nearby: ['wylie', 'richardson', 'royse-city', 'forney', 'dallas'],
		photos: ['full-line-vending.jpeg', 'employee-cafeteria.png', 'smart-cooler-unlock.jpg', 'team-break.jpg', 'vending-row.jpeg', 'micro-market-fresh.png'],
	},
	{
		slug: 'sherman',
		name: 'Sherman',
		region: 'North Corridor',
		county: 'Grayson and Collin Counties',
		highways: 'US-75, US-82, and SH-289',
		local:
			'The North Corridor runs up US-75 from Melissa and Anna to Van Alstyne, Howe, and Sherman, with Celina and Gunter to the west. Sherman is seeing large investment in semiconductor manufacturing, while the towns to the south are adding homes, schools, and businesses quickly.',
		focus: ['manufacturing', 'warehouses', 'education', 'hospitals'],
		includes: ['Sherman', 'Melissa', 'Anna', 'Van Alstyne', 'Howe', 'Gunter', 'Celina'],
		nearby: ['mckinney', 'prosper', 'allen', 'frisco'],
		photos: ['plant-manager-vending.png', 'workers-breakroom-vending.jpeg', 'smart-cooler-fresh-food.jpeg', 'workers-lunch.avif', 'vending-row.jpeg', 'texas-vending-coolers.png'],
		faq: {
			question: 'Which North Corridor towns do you serve?',
			answer: 'Sherman, Melissa, Anna, Van Alstyne, Howe, Gunter, and Celina, along with the businesses between them on US-75.',
		},
	},
	{
		slug: 'forney',
		name: 'Forney',
		region: 'East of Dallas',
		county: 'Kaufman County',
		highways: 'US-80',
		local:
			'Forney is a growing city east of Dallas, with new distribution buildings, schools, and medical offices along US-80.',
		focus: ['warehouses', 'logistics', 'education', 'hospitals'],
		nearby: ['kaufman', 'royse-city', 'rowlett', 'dallas'],
		photos: ['warehouse-cafeteria.avif', 'smart-cooler-kiosk.jpeg', 'drink-coolers-kiosk.jpeg', 'workers-lunch.avif', 'phone-pay-vending.jpg', 'full-line-vending.jpeg'],
	},
	{
		slug: 'wylie',
		name: 'Wylie',
		region: 'Collin County and North',
		county: 'Collin, Dallas, and Rockwall Counties',
		highways: 'SH-78',
		local:
			'Wylie sits near Lake Lavon in southeast Collin County. Its employers include manufacturers, schools, medical offices, and local businesses along SH-78.',
		focus: ['manufacturing', 'education', 'hospitals', 'offices'],
		nearby: ['allen', 'rowlett', 'mckinney', 'richardson'],
		photos: ['employee-cafeteria.png', 'plant-manager-vending.png', 'micro-market-shelving.jpg', 'smart-cooler-phone.jpg', 'team-break.jpg', 'vending-row.jpeg'],
	},
	{
		slug: 'kaufman',
		name: 'Kaufman',
		region: 'East of Dallas',
		county: 'Kaufman County',
		highways: 'US-175',
		local:
			'Kaufman is the county seat of Kaufman County, southeast of Dallas on US-175. Employers include county offices, schools, medical facilities, and local businesses.',
		focus: ['manufacturing', 'education', 'hospitals', 'offices'],
		nearby: ['forney', 'royse-city', 'waxahachie', 'dallas'],
		photos: ['workers-breakroom-vending.jpeg', 'vending-row.jpeg', 'smart-cooler-breakroom.jpeg', 'workers-lunch.avif', 'drink-coolers-snacks.webp', 'technician-vending.jpg'],
	},
	{
		slug: 'bedford',
		name: 'Bedford',
		region: 'Fort Worth and Tarrant County',
		county: 'Tarrant County',
		highways: 'SH-183 and SH-121',
		local:
			'Bedford is part of the Hurst-Euless-Bedford area in northeast Tarrant County, between Dallas and Fort Worth. It has medical offices, business parks, schools, and fitness centers close to DFW Airport.',
		focus: ['hospitals', 'offices', 'fitness', 'education'],
		nearby: ['hurst', 'euless', 'arlington', 'southlake', 'keller'],
		photos: ['smart-cooler-fresh-food.jpeg', 'lounge-smart-coolers.png', 'stocking-fresh-food.jpg', 'smart-cooler-unlock.jpg', 'coffee-station.jpg', 'micro-market-breakroom.jpeg'],
	},
	{
		slug: 'richardson',
		name: 'Richardson',
		region: 'Dallas and Central',
		county: 'Dallas and Collin Counties',
		highways: 'US-75 and the President George Bush Turnpike',
		local:
			'Richardson is home to the Telecom Corridor, UT Dallas, and the CityLine office district. Tech offices, data centers, and campuses here often run beyond normal business hours.',
		focus: ['offices', 'datacenter', 'education'],
		nearby: ['plano', 'addison', 'dallas', 'allen', 'wylie'],
		photos: ['office-smart-fridge.webp', 'smart-cooler-breakroom.jpeg', 'micro-market-fresh.png', 'office-cafe.jpg', 'smart-cooler-unlock.jpg', 'office-campus.jpeg'],
	},
	{
		slug: 'prosper',
		name: 'Prosper',
		region: 'Collin County and North',
		county: 'Collin and Denton Counties',
		highways: 'US-380, the Dallas North Tollway, and Preston Road',
		local:
			'Prosper is a fast-growing town north of Frisco along US-380 and the Dallas North Tollway. New schools, medical offices, and businesses are opening as the town grows.',
		focus: ['education', 'hospitals', 'offices', 'fitness'],
		nearby: ['frisco', 'mckinney', 'sherman', 'the-colony'],
		photos: ['texas-vending-coolers.png', 'micro-market-coffee.jpg', 'smart-cooler-kiosk.jpeg', 'team-lunch.jpg', 'smart-cooler-phone.jpg', 'lobby-smart-vending.jpg'],
	},
	{
		slug: 'mckinney',
		name: 'McKinney',
		region: 'Collin County and North',
		county: 'Collin County (county seat)',
		highways: 'US-75, SH-121, and US-380',
		local:
			'McKinney is the Collin County seat, with a historic downtown, McKinney National Airport, medical centers, and growing industrial and office parks along US-75 and SH-121.',
		focus: ['hospitals', 'manufacturing', 'offices', 'transportation'],
		nearby: ['allen', 'prosper', 'frisco', 'sherman', 'plano'],
		photos: ['micro-market-stations.jpg', 'office-breakroom-coolers.png', 'plant-manager-vending.png', 'stocking-fresh-food.jpg', 'vending-row.jpeg', 'coffee-station.jpg'],
	},
	{
		slug: 'roanoke',
		name: 'Roanoke',
		region: 'Fort Worth and Tarrant County',
		county: 'Denton County',
		highways: 'SH-114 and US-377',
		local:
			'Roanoke sits right next to AllianceTexas at SH-114 and US-377. Nearby distribution centers, offices, and a busy restaurant district all need break room service.',
		focus: ['logistics', 'warehouses', 'offices', 'hospitality'],
		nearby: ['alliance', 'keller', 'southlake', 'fort-worth'],
		photos: ['drink-coolers-kiosk.jpeg', 'warehouse-worker-break.avif', 'multi-door-cooler.jpeg', 'worker-cashless-cooler.webp', 'smart-cooler-kiosk.jpeg', 'workers-breakroom-vending.jpeg'],
	},
	{
		slug: 'the-colony',
		name: 'The Colony',
		region: 'Collin County and North',
		county: 'Denton County',
		highways: 'SH-121 (Sam Rayburn Tollway)',
		local:
			'The Colony sits on Lewisville Lake along SH-121, with the Grandscape retail and entertainment district, office buildings, and business parks nearby.',
		focus: ['hospitality', 'offices', 'warehouses', 'fitness'],
		nearby: ['frisco', 'carrollton', 'plano', 'prosper'],
		photos: ['micro-market-shelving.jpg', 'drink-coolers-snacks.webp', 'smart-cooler-fresh-food.jpeg', 'team-break.jpg', 'phone-pay-vending.jpg', 'warehouse-cafeteria.avif'],
	},
	{
		slug: 'farmers-branch',
		name: 'Farmers Branch',
		region: 'Dallas and Central',
		county: 'Dallas County',
		highways: 'I-635 and I-35E',
		local:
			'Farmers Branch sits at I-635 and I-35E, with office towers, light industrial buildings, and the Mercer Crossing development.',
		focus: ['offices', 'warehouses', 'manufacturing'],
		nearby: ['carrollton', 'addison', 'dallas', 'coppell', 'irving'],
		photos: ['office-campus.jpeg', 'workers-breakroom-vending.jpeg', 'micro-market-breakroom.jpeg', 'office-cafe.jpg', 'multi-door-cooler.jpeg', 'technician-vending.jpg'],
	},
	{
		slug: 'carrollton',
		name: 'Carrollton',
		region: 'Dallas and Central',
		county: 'Dallas, Denton, and Collin Counties',
		highways: 'I-35E, the President George Bush Turnpike, and SH-121',
		local:
			'Carrollton has large industrial and distribution parks along I-35E and the President George Bush Turnpike, plus offices and schools across the city.',
		focus: ['warehouses', 'manufacturing', 'logistics', 'offices'],
		nearby: ['farmers-branch', 'coppell', 'addison', 'the-colony', 'dallas'],
		photos: ['distribution-breakroom.jpeg', 'plant-manager-vending.png', 'smart-cooler-breakroom.jpeg', 'workers-lunch.avif', 'drink-coolers-kiosk.jpeg', 'employee-cafeteria.png'],
	},
	{
		slug: 'southlake',
		name: 'Southlake',
		region: 'Fort Worth and Tarrant County',
		county: 'Tarrant and Denton Counties',
		highways: 'SH-114',
		local:
			'Southlake has corporate offices along SH-114, Southlake Town Square, medical offices, and schools.',
		focus: ['offices', 'hospitals', 'education', 'fitness'],
		nearby: ['keller', 'roanoke', 'coppell', 'bedford', 'hurst'],
		photos: ['office-lounge.png', 'espresso.jpg', 'office-smart-fridge.webp', 'meeting-salads.jpg', 'smart-coolers-kitchen.jpeg', 'micro-market-coffee.jpg'],
	},
	{
		slug: 'euless',
		name: 'Euless',
		region: 'DFW Airport Area',
		county: 'Tarrant County',
		highways: 'SH-183 and SH-121',
		local:
			'Euless borders DFW International Airport, so many local employers support air travel, logistics, and hotels. Schools and medical offices round out the area.',
		focus: ['transportation', 'logistics', 'hospitality', 'education'],
		nearby: ['bedford', 'hurst', 'irving', 'arlington', 'coppell'],
		photos: ['lobby-smart-vending.jpg', 'drink-coolers-kiosk.jpeg', 'smart-cooler-phone.jpg', 'phone-pay-vending.jpg', 'warehouse-worker-break.avif', 'micro-market-stations.jpg'],
	},
	{
		slug: 'desoto',
		name: 'DeSoto',
		region: 'South Dallas and Ellis County',
		county: 'Dallas and Ellis Counties',
		highways: 'I-35E, I-20, I-45, and US-67',
		local:
			'This area covers southern Dallas County and northern Ellis County: DeSoto, Lancaster, Duncanville, Red Oak, and Ferris. The I-20, I-35E, and I-45 corridors here hold many large distribution centers.',
		focus: ['warehouses', 'logistics', 'manufacturing', 'education'],
		includes: ['DeSoto', 'Lancaster', 'Duncanville', 'Red Oak', 'Ferris'],
		nearby: ['dallas', 'waxahachie', 'kaufman', 'arlington'],
		photos: ['warehouse-cafeteria.avif', 'worker-cashless-cooler.webp', 'distribution-breakroom.jpeg', 'warehouse-worker-break.avif', 'vending-row.jpeg', 'smart-cooler-fresh-food.jpeg'],
		faq: {
			question: 'Which southern Dallas County and Ellis County cities do you serve?',
			answer: 'DeSoto, Lancaster, Duncanville, Red Oak, and Ferris, including the distribution centers along I-20, I-35E, and I-45.',
		},
	},
	{
		slug: 'hurst',
		name: 'Hurst',
		region: 'Fort Worth and Tarrant County',
		county: 'Tarrant County',
		highways: 'SH-183, SH-121, and SH-10',
		local:
			'Hurst is part of the Hurst-Euless-Bedford area, with North East Mall, medical offices, schools, and business parks between Dallas and Fort Worth.',
		focus: ['hospitals', 'hospitality', 'education', 'offices'],
		nearby: ['bedford', 'euless', 'keller', 'fort-worth', 'arlington'],
		photos: ['smart-cooler-kiosk.jpeg', 'micro-market-breakroom.jpeg', 'stocking-fresh-food.jpg', 'team-lunch.jpg', 'smart-cooler-unlock.jpg', 'full-line-vending.jpeg'],
	},
	{
		slug: 'royse-city',
		name: 'Royse City',
		region: 'East of Dallas',
		county: 'Rockwall, Collin, and Hunt Counties',
		highways: 'I-30',
		local:
			'Royse City sits on I-30 east of Rockwall and is adding schools and businesses as the area grows.',
		focus: ['manufacturing', 'warehouses', 'education'],
		nearby: ['rowlett', 'forney', 'wylie', 'kaufman'],
		photos: ['workers-lunch.avif', 'plant-manager-vending.png', 'drink-coolers-snacks.webp', 'worker-cashless-cooler.webp', 'smart-cooler-phone.jpg', 'distribution-breakroom.jpeg'],
	},
	{
		slug: 'waxahachie',
		name: 'Waxahachie',
		region: 'South Dallas and Ellis County',
		county: 'Ellis County (county seat)',
		highways: 'I-35E and US-287',
		local:
			'Waxahachie is the Ellis County seat, south of Dallas on I-35E. Manufacturers, distribution sites, county offices, schools, and medical facilities all call it home.',
		focus: ['manufacturing', 'warehouses', 'education', 'hospitals'],
		nearby: ['desoto', 'kaufman', 'dallas'],
		photos: ['employee-cafeteria.png', 'workers-breakroom-vending.jpeg', 'texas-vending-coolers.png', 'workers-lunch.avif', 'multi-door-cooler.jpeg', 'technician-vending.jpg'],
	},
];

export const cityHref = (city: City) => city.href ?? `/about-us/cities/${city.slug}/`;
export const cityBySlug = (slug: string) => cities.find((city) => city.slug === slug);

/** Industry page link and a short reason it matters, keyed by IndustryKey */
export const industryInfo: Record<IndustryKey, { label: string; href: string; need: string }> = {
	warehouses: { label: 'Warehouses', href: '/industries-we-serve/warehouses/', need: 'food within walking distance of the floor on every shift' },
	logistics: { label: 'Logistics and distribution centers', href: '/industries-we-serve/logistics/', need: 'fast, cashless options for round-the-clock crews and drivers' },
	manufacturing: { label: 'Manufacturing plants', href: '/industries-we-serve/manufacturing-facilities/', need: 'fresh meals and snacks stocked for first, second, and third shift' },
	offices: { label: 'Corporate offices', href: '/industries-we-serve/corporate-offices/', need: 'coffee, fresh food, and a break room people want to use' },
	hospitals: { label: 'Hospitals and medical offices', href: '/industries-we-serve/hospitals/', need: 'fresh food for staff and visitors after the cafeteria closes' },
	education: { label: 'Schools and campuses', href: '/industries-we-serve/education/', need: 'snacks, drinks, and meals for students, faculty, and staff' },
	fitness: { label: 'Fitness centers', href: '/industries-we-serve/fitness/', need: 'protein snacks, healthy meals, and cold drinks for members' },
	transportation: { label: 'Airports and transportation sites', href: '/industries-we-serve/transportation-hubs/', need: 'grab-and-go food for travelers and staff on tight schedules' },
	dealerships: { label: 'Auto dealerships', href: '/industries-we-serve/auto-dealerships/', need: 'snacks, drinks, and coffee for customer lounges' },
	hospitality: { label: 'Hotels, apartments, and venues', href: '/industries-we-serve/hospitality/', need: 'self-serve markets for guests and residents' },
	datacenter: { label: 'Data centers', href: '/industries-we-serve/data-center/', need: 'self-service food for secure, 24/7 sites' },
};

/** Alt text for each photo in src/assets/cities/ */
export const cityPhotoAlt: Record<string, string> = {
	'warehouse-cafeteria.avif': 'Warehouse cafeteria with workers at tables and colorful chairs',
	'distribution-breakroom.jpeg': 'Large break room with bar tables, stools, and glass-door coolers',
	'warehouse-worker-break.avif': 'Warehouse worker in a safety vest resting between shelves of boxes',
	'workers-breakroom-vending.jpeg': 'Workers in safety vests at a break room table near vending machines',
	'workers-lunch.avif': 'Two workers in hard hats eating sandwiches on a break',
	'plant-manager-vending.png': 'Plant manager in a hard hat holding a clipboard near a vending machine',
	'employee-cafeteria.png': 'Employee cafeteria with colorful chairs and tables',
	'drink-coolers-kiosk.jpeg': 'Row of glass-door drink coolers beside snack racks and a self-checkout kiosk',
	'worker-cashless-cooler.webp': 'Worker using the touch screen on a cashless drink and snack cooler',
	'office-lounge-vending.png': 'Office lounge with people on sofas and two smart vending coolers',
	'office-lounge.png': 'Coworkers brainstorming in a bright office lounge',
	'office-smart-fridge.webp': 'Coworkers sharing a meal near a smart fridge in an office break room',
	'office-breakroom-coolers.png': 'Office break room with smart vending coolers and coworkers on a break',
	'lounge-smart-coolers.png': 'Coworkers relaxing in a lounge with two smart coolers',
	'meeting-salads.jpg': 'Coworkers in a meeting with salads and bottled water',
	'team-break.jpg': 'Coworkers talking around a table of snacks and drinks',
	'office-cafe.jpg': 'Coworkers chatting over coffee in a bright office café',
	'team-lunch.jpg': 'Coworkers sharing lunch around an office table',
	'office-campus.jpeg': 'Glass office buildings and parking on a business campus',
	'lobby-smart-vending.jpg': 'Two 24-hour smart vending coolers in an office lobby',
	'smart-cooler-breakroom.jpeg': 'Two-door 24-hour smart cooler beside microwaves in a break room',
	'micro-market-breakroom.jpeg': 'Break room micro market with shelves, coolers, and a self-checkout kiosk',
	'micro-market-stations.jpg': 'Micro market with coffee, drink, grab-and-go, and snack stations',
	'micro-market-coffee.jpg': 'Micro market with drink coolers, snack racks, and a coffee counter',
	'micro-market-fresh.png': 'Fresh market with labeled coolers and a woman choosing a drink',
	'micro-market-shelving.jpg': 'Modern micro market with open shelving and seating',
	'smart-cooler-kiosk.jpeg': 'Smart cooler of salads and sandwiches beside a self-checkout kiosk',
	'smart-cooler-fresh-food.jpeg': 'Two-door cooler of salads, sandwiches, and yogurt beside a kiosk',
	'multi-door-cooler.jpeg': 'Man choosing a drink from a multi-door smart cooler',
	'vending-row.jpeg': 'Row of snack and drink vending machines',
	'phone-pay-vending.jpg': 'Woman paying at a snack vending machine with her phone',
	'smart-cooler-unlock.jpg': 'Hand opening a smart cooler door after tapping to unlock',
	'smart-cooler-phone.jpg': 'Phone held to a smart cooler payment reader',
	'coffee-station.jpg': 'Office coffee station with a brewer and mugs',
	'espresso.jpg': 'Espresso pouring from a coffee machine into a cup',
	'stocking-fresh-food.jpg': 'Woman loading packaged salads into a refrigerated machine',
	'full-line-vending.jpeg': 'Snack, drink, and fresh food machines in a break room with a table',
	'texas-vending-coolers.png': 'Texas Vending branded smart coolers stocked with drinks and snacks',
	'drink-coolers-snacks.webp': 'Row of drink coolers and snack displays along a break room wall',
	'smart-coolers-kitchen.jpeg': 'Two smart coolers stocked with food and drinks in an office break room',
	'technician-vending.jpg': 'Technician kneeling beside a vending machine with a clipboard',
};
