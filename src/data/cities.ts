// Cities We Serve. Each entry is one destination page at /about-us/cities/<slug>/ (Alliance has its own page).
// `towns` lists the source cities an area page also covers. `photos` are file names in src/assets/cities/.
// Local facts were checked against the URLs in `sources` (Wikipedia, city and economic development sites, local news)
// in October 2026.

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
	/** Two paragraphs: the local business landscape, then what it means for break rooms */
	about: string[];
	businessAreas: { name: string; note: string }[];
	focus: IndustryKey[];
	nearby: string[];
	/** Towns covered by an area page, the destination city first */
	towns?: { name: string; county: string; note: string }[];
	/** Six photos: hero first */
	photos: string[];
	faq?: { question: string; answer: string };
	sources: string[];
}

export const cities: City[] = [
	{
		"slug": "dallas",
		"name": "Dallas",
		"region": "Dallas and Central",
		"county": "Dallas County, with parts in Collin, Denton, Kaufman, and Rockwall Counties",
		"highways": "I-35E, I-30, I-45, I-20, US-75, I-635, and the Dallas North Tollway",
		"about": [
			"Dallas is the seat of Dallas County and home to large headquarters such as AT&T in Downtown and Texas Instruments, which runs its headquarters and chip plants in the city. North of Downtown, the Stemmons Corridor along I-35E mixes office towers, hotels, the Dallas Market Center, and the hospitals of the Southwestern Medical District. South of I-20, between I-35E and I-45, the International Inland Port of Dallas holds distribution centers for companies such as Amazon and FedEx.",
			"That spread means very different break rooms. Downtown offices want coffee and fresh food for staff and visitors during the workday. Hospitals and distribution centers work through the night, so a micro market that stays open around the clock serves the late shift. Texas Vending is based on N Stemmons Freeway, in the middle of these areas."
		],
		"businessAreas": [
			{
				"name": "Downtown Dallas",
				"note": "corporate headquarters including AT&T, Comerica, and Jacobs, plus the Arts District and West End"
			},
			{
				"name": "Stemmons Corridor",
				"note": "office towers, hotels such as the Hilton Anatole, the Infomart, and the Dallas Market Center along I-35E"
			},
			{
				"name": "Southwestern Medical District",
				"note": "UT Southwestern Medical Center, Parkland Memorial Hospital, and Children's Medical Center"
			},
			{
				"name": "Love Field",
				"note": "city airport northwest of Downtown and headquarters of Southwest Airlines"
			},
			{
				"name": "International Inland Port of Dallas",
				"note": "distribution centers south of I-20 between I-35E and I-45 in southern Dallas County"
			}
		],
		"focus": [
			"offices",
			"hospitals",
			"warehouses",
			"hospitality"
		],
		"nearby": [
			"irving",
			"addison",
			"richardson",
			"farmers-branch",
			"desoto"
		],
		"photos": [
			"office-breakroom-coolers.png",
			"micro-market-breakroom.jpeg",
			"meeting-salads.jpg",
			"vending-row.jpeg",
			"coffee-station.jpg",
			"warehouse-cafeteria.avif"
		],
		"faq": {
			"question": "Our hospital in the Medical District runs around the clock. Can night staff buy fresh food?",
			"answer": "Yes. Micro markets stay open around the clock with sandwiches, salads, and meals, and we restock based on real-time sales with visits planned around your shifts and badge rules."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Dallas",
			"https://en.wikipedia.org/wiki/Stemmons_Corridor",
			"https://wilmeredc.com/news-media/article/by-rail-truck-dallas-inland-port-is-at-the-crossroads-of-commerce-logistics"
		]
	},
	{
		"slug": "fort-worth",
		"name": "Fort Worth",
		"region": "Fort Worth and Tarrant County",
		"county": "Tarrant County, with parts in Denton, Johnson, Parker, and Wise Counties",
		"highways": "I-35W, I-30, I-20, and I-820",
		"about": [
			"Fort Worth is the Tarrant County seat. Lockheed Martin Aeronautics is the city's largest employer, building aircraft at Air Force Plant 4, which shares a runway with Naval Air Station Joint Reserve Base Fort Worth. American Airlines, BNSF Railway, and Bell Textron are headquartered in the city. On the north side, Perot Field Fort Worth Alliance Airport anchors an Amazon Air hub, a FedEx regional sorting hub, and the BNSF Alliance intermodal facility.",
			"South of Downtown, the Near Southside Medical District holds the county's major hospitals. Aircraft plants, hospitals, and cargo hubs all run night shifts and enforce strict access rules. Break rooms here need food that is there in the middle of the night and service visits that fit badge checks and shift changes."
		],
		"businessAreas": [
			{
				"name": "Downtown and Sundance Square",
				"note": "mixed-use district with offices, restaurants, and nightlife"
			},
			{
				"name": "Near Southside Medical District",
				"note": "Texas Health Harris Methodist, Cook Children's, JPS Health Network, and Baylor Scott & White All Saints"
			},
			{
				"name": "Air Force Plant 4 and NAS JRB Fort Worth",
				"note": "Lockheed Martin Aeronautics plant beside the naval air station on the west side"
			},
			{
				"name": "AllianceTexas",
				"note": "north Fort Worth logistics area around Alliance Airport, with Amazon Air, FedEx, and BNSF intermodal operations"
			},
			{
				"name": "Stockyards National Historic District",
				"note": "bars, restaurants, and country music venues"
			}
		],
		"focus": [
			"manufacturing",
			"hospitals",
			"logistics",
			"warehouses"
		],
		"nearby": [
			"alliance",
			"keller",
			"hurst",
			"arlington",
			"roanoke"
		],
		"photos": [
			"distribution-breakroom.jpeg",
			"workers-breakroom-vending.jpeg",
			"smart-cooler-kiosk.jpeg",
			"workers-lunch.avif",
			"phone-pay-vending.jpg",
			"micro-market-stations.jpg"
		],
		"faq": {
			"question": "Our plant in Fort Worth runs three shifts with badge-controlled entry. How do you handle service?",
			"answer": "We plan service visits around your shifts, docks, and badge rules, and restock based on real-time sales. If something breaks, a local technician responds within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Fort_Worth,_Texas",
			"https://comptroller.texas.gov/economy/economic-data/military/2023/nas-fortworth.php",
			"https://www.fortworthsouth.org/community/whats-here/careers-health-sciences-major-employers/health-sciences/",
			"https://en.wikipedia.org/wiki/Perot_Field_Fort_Worth_Alliance_Airport",
			"https://www.hillwood.com/?p=2177"
		]
	},
	{
		"slug": "alliance",
		"name": "Alliance",
		"href": "/alliance-texas-vending-services/",
		"region": "Fort Worth and Tarrant County",
		"county": "Tarrant and Denton Counties",
		"highways": "I-35W and SH-114",
		"focus": [
			"logistics",
			"warehouses"
		],
		"nearby": [
			"fort-worth",
			"roanoke",
			"keller"
		],
		"photos": [],
		"about": [],
		"businessAreas": [],
		"sources": []
	},
	{
		"slug": "arlington",
		"name": "Arlington",
		"region": "Fort Worth and Tarrant County",
		"county": "Tarrant County",
		"highways": "I-20, I-30, SH-360, and US-287",
		"about": [
			"Arlington sits in Tarrant County between Dallas and Fort Worth. General Motors is its largest employer, at the Arlington Assembly plant that builds full-size SUVs, followed by Arlington ISD, UT Arlington, Texas Health Resources, and Six Flags Over Texas. On the east side, the Great Southwest Industrial District, shared with Grand Prairie, holds warehouse, manufacturing, and office space.",
			"The Entertainment District puts AT&T Stadium, Globe Life Field, and Choctaw Stadium within walking distance of each other, next to Six Flags and Texas Live!. Venue and hospitality staff go from quiet weekdays to packed event days, while the GM plant and nearby warehouses keep steady shifts. Break rooms here need restocking that follows actual sales, not a fixed route."
		],
		"businessAreas": [
			{
				"name": "Entertainment District",
				"note": "AT&T Stadium, Globe Life Field, Choctaw Stadium, Six Flags Over Texas, and Texas Live!"
			},
			{
				"name": "GM Arlington Assembly",
				"note": "full-size SUV plant and the city's largest employer"
			},
			{
				"name": "Great Southwest Industrial District",
				"note": "warehouse, manufacturing, and office space shared with Grand Prairie"
			},
			{
				"name": "University of Texas at Arlington",
				"note": "one of the largest universities in Texas"
			}
		],
		"focus": [
			"manufacturing",
			"warehouses",
			"hospitality",
			"education"
		],
		"nearby": [
			"fort-worth",
			"euless",
			"bedford",
			"hurst",
			"irving"
		],
		"photos": [
			"plant-manager-vending.png",
			"vending-row.jpeg",
			"employee-cafeteria.png",
			"smart-cooler-unlock.jpg",
			"drink-coolers-snacks.webp",
			"technician-vending.jpg"
		],
		"faq": {
			"question": "Our staff count jumps on Cowboys and Rangers game days. Can your machines keep up?",
			"answer": "Yes. We monitor every machine in real time and restock based on what sells, so busy event days show up in the data and the next visit brings more of what ran out."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Arlington,_Texas",
			"https://arlington.org/things-to-do/attractions/arlington-entertainment-district",
			"https://en.wikipedia.org/wiki/Great_Southwest_Industrial_District",
			"https://arlingtontxhistory.org/article-999.php",
			"https://www.arlingtontx.gov/News-Articles/2023/September/Invest-in-Our-Economy-General-Motors-Announces-500-Million-Plus-Investment-in-Arlington-Assembly"
		]
	},
	{
		"slug": "plano",
		"name": "Plano",
		"region": "Collin County and North",
		"county": "Collin and Denton Counties",
		"highways": "US-75, the Dallas North Tollway, the President George Bush Turnpike, the Sam Rayburn Tollway (SH-121), and Preston Road (SH-289)",
		"about": [
			"West Plano is built around Legacy Business Park, where the JCPenney, Frito-Lay, and former EDS campuses started the corporate district. AT&T announced in January 2026 that it will build its global headquarters on the old EDS site at 5400 Legacy Drive, and Legacy West next door holds offices such as Sally Beauty's new headquarters. The city's largest employers include JPMorgan Chase, Capital One, Toyota Motor North America, and PepsiCo, and data center developers have built in the Legacy area too.",
			"Most of that work happens on large, badge-controlled campuses where a trip off site for lunch takes real time, so food and coffee need to be on each floor or in each building. Data centers run around the clock with small crews, and the hospitals on Preston Road and West Parker Road have staff and visitors at every hour. Plano is the largest city in Texas without an interstate, so routes run on US-75, the Tollway, the Bush Turnpike, and the Sam Rayburn Tollway."
		],
		"businessAreas": [
			{
				"name": "Legacy Business Park",
				"note": "corporate campuses including JCPenney and Frito-Lay, the planned AT&T global headquarters, and data centers"
			},
			{
				"name": "Legacy West",
				"note": "mixed-use district with corporate offices, including JPMorgan Chase's campus and Sally Beauty's headquarters"
			},
			{
				"name": "Downtown Plano",
				"note": "historic downtown served by the Downtown Plano and 12th Street DART stations"
			},
			{
				"name": "Preston Road and West Parker Road hospitals",
				"note": "Children's Medical Center Plano at 7601 Preston Road and Texas Health Plano at 6200 W Parker Road"
			},
			{
				"name": "Collin College Spring Creek Campus",
				"note": "the larger of Collin College's two Plano campuses"
			}
		],
		"focus": [
			"offices",
			"datacenter",
			"hospitals"
		],
		"nearby": [
			"richardson",
			"allen",
			"frisco",
			"addison",
			"mckinney"
		],
		"photos": [
			"office-lounge-vending.png",
			"micro-market-coffee.jpg",
			"office-cafe.jpg",
			"espresso.jpg",
			"smart-coolers-kitchen.jpeg",
			"office-campus.jpeg"
		],
		"faq": {
			"question": "Our Legacy campus has several buildings and badge-only entry. Can you serve all of them?",
			"answer": "Yes. We plan service visits around your badge rules and shifts, and we restock each location based on its real-time sales. Placement is free where total foot traffic, employees and visitors, is at least 50 people."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Plano,_Texas",
			"https://communityimpact.com/plano/development/13-billion-att-hq-set-for-heart-of-the-legacy-business-park/",
			"https://communityimpact.com/plano-north/development/sally-beauty-holdings-moving-headquarters-to-plano-from-denton/",
			"https://www.streamdatacenters.com/news/sdc-breaks-ground-145000-sf-data-center-legacy-business-park/",
			"https://en.wikipedia.org/wiki/Children%27s_Medical_Center_Plano",
			"https://www.texashealth.org/locations/texas-health-plano"
		]
	},
	{
		"slug": "irving",
		"name": "Irving",
		"region": "DFW Airport Area",
		"county": "Dallas County",
		"highways": "SH-114, SH-183, I-635, Loop 12, and SH-161 (President George Bush Turnpike)",
		"about": [
			"Irving is a Dallas County city that includes part of DFW International Airport. The airport grounds in Irving hold a global distribution center and Foreign Trade Zone No. 39, a business park with direct access to SH-114 and SH-183. Headquarters in the city include McKesson, Vistra, Nexstar Media Group, and the Boy Scouts of America, and QTS runs a large data center campus on Longhorn Drive.",
			"Outside the Las Colinas towers, Irving's work is spread across cargo and distribution near the airport, office and flex buildings along Freeport Parkway, data centers, and campuses such as the University of Dallas. Airport and data center sites run on shifts with strict access rules, so service visits have to fit badges and dock times."
		],
		"businessAreas": [
			{
				"name": "DFW Airport grounds and Foreign Trade Zone No. 39",
				"note": "global distribution center and business park with access to SH-114 and SH-183"
			},
			{
				"name": "Freeport Parkway",
				"note": "office and industrial buildings between I-635 and SH-114, minutes from DFW Airport"
			},
			{
				"name": "Longhorn Drive data center campus",
				"note": "QTS's Irving campus, which has been expanding its data halls"
			},
			{
				"name": "Heritage District",
				"note": "historic downtown along Main Street with the Civic Center and a TRE commuter rail station"
			},
			{
				"name": "University of Dallas",
				"note": "private university campus in Irving"
			}
		],
		"focus": [
			"logistics",
			"transportation",
			"datacenter",
			"offices"
		],
		"nearby": [
			"las-colinas",
			"coppell",
			"euless",
			"farmers-branch",
			"dallas"
		],
		"photos": [
			"lobby-smart-vending.jpg",
			"office-smart-fridge.webp",
			"micro-market-fresh.png",
			"team-break.jpg",
			"smart-cooler-phone.jpg",
			"distribution-breakroom.jpeg"
		],
		"faq": {
			"question": "Our building near DFW Airport has dock schedules and badge-only access. How do restocking visits work?",
			"answer": "We plan service visits around your shifts, docks, and badge rules, and restock based on real-time sales so drivers bring what is needed. Local technicians respond to reported issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Irving,_Texas",
			"https://irvingchamber.com/economic-development-base/relocating-or-expanding-your-business/industrial-space/",
			"https://irvingchamber.com/2024/10/30/qts-data-center-add-to-dallas-area-data-center-campus-bandwidth-costar/",
			"https://hillwood.com/?p=1953",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_Loop_12",
			"https://en.wikipedia.org/wiki/Downtown_Irving/Heritage_Crossing_station"
		]
	},
	{
		"slug": "las-colinas",
		"name": "Las Colinas",
		"region": "DFW Airport Area",
		"county": "Dallas County (within the city of Irving)",
		"highways": "SH-114, I-635, SH-161 (President George Bush Turnpike), and SH-183",
		"about": [
			"Las Colinas is a master-planned business district inside Irving, bordered by I-635 on the north, SH-161 on the west, and SH-183 to the south, with SH-114 through the middle. Global headquarters here include Caterpillar, Fluor, Kimberly-Clark, Celanese, and Commercial Metals. The Urban Center packs office towers around Lake Carolyn, the Mandalay Canal, and Williams Square, home of the Mustangs of Las Colinas sculpture.",
			"The district also draws event crowds to the Irving Convention Center at Las Colinas, which has its own DART Orange Line stop, and to the Toyota Music Factory. Office towers here hold headquarters staff, regional teams, and visitors on many floors. A micro market or smart cooler on a shared floor can give several tenants coffee, fresh food, and tap-to-pay checkout without anyone leaving the building."
		],
		"businessAreas": [
			{
				"name": "Las Colinas Urban Center",
				"note": "office towers along the Mandalay Canal with a DART Orange Line station"
			},
			{
				"name": "Lake Carolyn and Williams Square",
				"note": "man-made lake at the center of the district and a plaza enclosed by office towers"
			},
			{
				"name": "Irving Convention Center at Las Colinas",
				"note": "convention center with its own Orange Line stop"
			},
			{
				"name": "Toyota Music Factory",
				"note": "the Pavilion concert venue, a cinema, and restaurants and bars"
			}
		],
		"focus": [
			"offices",
			"hospitality"
		],
		"nearby": [
			"irving",
			"coppell",
			"farmers-branch",
			"dallas"
		],
		"photos": [
			"office-campus.jpeg",
			"lounge-smart-coolers.png",
			"micro-market-shelving.jpg",
			"coffee-station.jpg",
			"meeting-salads.jpg",
			"smart-cooler-breakroom.jpeg"
		],
		"faq": {
			"question": "Our tower in the Urban Center already has machines from another vendor. Can you take over?",
			"answer": "Yes. We repair and move machines from any supplier, placement is free for locations with at least 50 people in total foot traffic, and there is no long-term contract."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Las_Colinas",
			"https://www.irvingtexas.com/articles/post/las-colinas-facts/",
			"https://www.lascolinas.org/",
			"https://www.tclf.org/landscapes/williams-square",
			"https://en.wikipedia.org/wiki/Irving,_Texas"
		]
	},
	{
		"slug": "frisco",
		"name": "Frisco",
		"region": "Collin County and North",
		"county": "Collin and Denton Counties",
		"highways": "the Dallas North Tollway, the Sam Rayburn Tollway (SH-121), Preston Road (SH-289), US-380, and FM 423",
		"about": [
			"Frisco's business district follows the Dallas North Tollway, where The Star holds the Dallas Cowboys headquarters and training complex and Frisco Station is planned around office space at Warren Parkway. The PGA of America's headquarters sits beside the Omni PGA Frisco Resort. Frisco ISD is the city's largest employer, followed by the city, T-Mobile, Keurig Dr Pepper, TIAA, and Conifer Health Solutions.",
			"The mix is offices, schools, hospitals, and event venues such as Toyota Stadium, Riders Field, Comerica Center, and the Ford Center at The Star. Office teams, school staff, and hospital shifts at the Baylor Scott & White hospitals each need a different setup. Venues and hotels add crowds on game and event days, when a break room or lobby market has to handle a rush."
		],
		"businessAreas": [
			{
				"name": "The Star",
				"note": "Dallas Cowboys headquarters and training complex with the Ford Center"
			},
			{
				"name": "Frisco Station",
				"note": "mixed-use development at the Dallas North Tollway and Warren Parkway planned around office space"
			},
			{
				"name": "PGA Frisco",
				"note": "PGA of America headquarters with championship golf courses and the Omni PGA Frisco Resort"
			},
			{
				"name": "Stonebriar Centre",
				"note": "regional mall with a large retail workforce"
			},
			{
				"name": "Frisco Square",
				"note": "mixed-use development that became the city's new downtown"
			}
		],
		"focus": [
			"offices",
			"education",
			"hospitals",
			"hospitality"
		],
		"nearby": [
			"plano",
			"prosper",
			"the-colony",
			"mckinney",
			"allen"
		],
		"photos": [
			"office-lounge.png",
			"smart-cooler-fresh-food.jpeg",
			"team-lunch.jpg",
			"smart-cooler-unlock.jpg",
			"micro-market-breakroom.jpeg",
			"lobby-smart-vending.jpg"
		],
		"faq": {
			"question": "Our office near The Star gets busy on event days. Can the break room keep up?",
			"answer": "We track sales in real time and restock based on what sells, so busy days do not empty the shelves. Micro markets stay open around the clock and take cards, mobile wallets, and tap-to-pay."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Frisco,_Texas",
			"https://en.wikipedia.org/wiki/Frisco_Station,_Texas"
		]
	},
	{
		"slug": "keller",
		"name": "Keller",
		"region": "Fort Worth and Tarrant County",
		"county": "Tarrant County",
		"highways": "US-377 along the west side, Keller Parkway (FM 1709), and Davis Boulevard (FM 1938), with SH-114 just to the north",
		"about": [
			"Keller is mostly residential, and city leaders describe it as nearly built out. Business sits in a few places: Old Town Keller on US-377, the Keller Town Center area around City Hall on Bear Creek Parkway, and the office and retail strips along Keller Parkway and Rufe Snow Drive. Keller ISD runs campuses across Keller and much of northeast Fort Worth.",
			"Most workplaces here are small: medical and professional offices, school campuses, restaurants, and shops. The city has said it wants more medical services and small business campuses. Placement is free at locations with at least 50 people in total foot traffic, and that count includes visitors, so a clinic or office with steady client traffic can qualify even with a small staff."
		],
		"businessAreas": [
			{
				"name": "Old Town Keller",
				"note": "historic district on US-377 that the city is building into a dining and entertainment area"
			},
			{
				"name": "Keller Town Center",
				"note": "City Hall on Bear Creek Parkway, a shopping center, and nearby office space"
			},
			{
				"name": "Keller Parkway (FM 1709)",
				"note": "main east-west corridor from I-35W toward SH-114, lined with offices and retail"
			},
			{
				"name": "Rufe Snow Drive",
				"note": "office and retail space near Keller Town Center"
			},
			{
				"name": "Baylor Scott & White Emergency Hospital – Keller",
				"note": "emergency hospital on South Main Street"
			}
		],
		"focus": [
			"offices",
			"education",
			"hospitals"
		],
		"nearby": [
			"alliance",
			"southlake",
			"roanoke",
			"hurst",
			"fort-worth"
		],
		"photos": [
			"smart-coolers-kitchen.jpeg",
			"texas-vending-coolers.png",
			"team-break.jpg",
			"smart-cooler-phone.jpg",
			"micro-market-coffee.jpg",
			"full-line-vending.jpeg"
		],
		"faq": {
			"question": "We run a medical office in Keller with a small staff. Do patient visits count toward free placement?",
			"answer": "Yes. Free placement is for locations with at least 50 people in total foot traffic, and that count includes both employees and visitors."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Keller,_Texas",
			"https://en.wikipedia.org/wiki/U.S._Route_377_in_Texas",
			"https://communityimpact.com/keller-roanoke-northeast-fort-worth/government/qa-learn-more-about-kellers-new-city-manager-aaron-rector/",
			"https://citybudgets.tarrantcounty.com/flipbook/CityBudgets/2025/Keller/files/basic-html/page20.html",
			"https://popup.regencycenters.com/en/buildings/keller-town-center",
			"https://turquoise.health/care/providers/baylor-scott-white-emergency-hospital-keller-keller-tx/"
		]
	},
	{
		"slug": "coppell",
		"name": "Coppell",
		"region": "DFW Airport Area",
		"county": "Dallas County, with a small part in Denton County",
		"highways": "I-635, SH-121, the Sam Rayburn Tollway, and the President George Bush Turnpike, with I-35E to the east",
		"about": [
			"Coppell sits in the northwest corner of Dallas County, and part of DFW International Airport lies inside city limits. The west and south sides of the city were set aside for offices, warehouses, and distribution, and companies such as Amazon, Uline, and Mohawk Industries have operations here. Industrial parks such as Park West Crossing line Freeport Parkway just north of the airport.",
			"Distribution buildings here run long hours around truck and dock schedules. Break rooms need snacks, drinks, and meals that are stocked before a shift starts and paid for with a card or phone. Next door, the Cypress Waters development adds corporate offices that share Coppell's ZIP code and call for coffee and fresh food."
		],
		"businessAreas": [
			{
				"name": "Southwest Coppell distribution zone",
				"note": "shipping and distribution facilities beside DFW Airport"
			},
			{
				"name": "Park West Crossing",
				"note": "industrial park bounded by Freeport Parkway, Southwestern Boulevard, and S Belt Line Road"
			},
			{
				"name": "Old Town Coppell",
				"note": "restaurants and local shops in the city's historic center"
			},
			{
				"name": "Cypress Waters",
				"note": "office development on the Coppell border, inside Dallas city limits, with Nokia and 7-Eleven"
			}
		],
		"focus": [
			"warehouses",
			"logistics",
			"offices"
		],
		"nearby": [
			"irving",
			"las-colinas",
			"carrollton",
			"farmers-branch",
			"southlake"
		],
		"photos": [
			"warehouse-worker-break.avif",
			"drink-coolers-kiosk.jpeg",
			"worker-cashless-cooler.webp",
			"workers-lunch.avif",
			"multi-door-cooler.jpeg",
			"office-breakroom-coolers.png"
		],
		"faq": {
			"question": "Our Coppell warehouse runs two small shifts. Do we qualify for free placement?",
			"answer": "Free placement covers locations with at least 50 people in total foot traffic, counting employees and visitors across your shifts. There is no long-term contract."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Coppell,_Texas",
			"https://rebusinessonline.com/?p=154017",
			"https://coppellstudentmedia.com/98697/news/coppells-blooming-business-scene-present-condition-tackling-covid-19-and-future-ambitions",
			"https://communityimpact.com/coppell-valley-ranch-las-colinas/coppell-irving-communities-undertake-construction-projects-as-cypress-waters-comes-online/"
		]
	},
	{
		"slug": "addison",
		"name": "Addison",
		"region": "Dallas and Central",
		"county": "Dallas County",
		"highways": "the Dallas North Tollway, with Belt Line Road as the town's main east-west street",
		"about": [
			"Addison is a small Dallas County town in the Platinum Corridor along the Dallas North Tollway, with a large stock of office space for its size. Mary Kay, Wingstop, Dresser, and Daseke have headquarters here, and Bank of America and Concentra are major employers. Belt Line Road carries most of the town's restaurants, and Addison Airport, a business aviation field owned by the town, covers about one-eighth of its land.",
			"Many Addison office buildings hold several tenants, so one shared break room or lobby market can serve a whole floor or building. Hangars, FBOs, flight schools, and charter operators at the airport keep crews on site early and late. Hotel and restaurant staff work split and late shifts, and they often eat after the guests do."
		],
		"businessAreas": [
			{
				"name": "Dallas North Tollway corridor",
				"note": "the town's office core, part of Dallas County's Platinum Corridor"
			},
			{
				"name": "Belt Line Road",
				"note": "the town's main restaurant corridor, often called Restaurant Row"
			},
			{
				"name": "Addison Airport",
				"note": "town-owned business aviation airport with FBOs, flight schools, and charter and cargo operators"
			},
			{
				"name": "Addison Circle",
				"note": "mixed-use district around Addison Circle Park, which hosts the town's seasonal outdoor events"
			},
			{
				"name": "Vitruvian Park",
				"note": "mixed-use development west of the Tollway with apartments, offices, and retail"
			}
		],
		"focus": [
			"offices",
			"hospitality",
			"transportation"
		],
		"nearby": [
			"dallas",
			"farmers-branch",
			"richardson",
			"carrollton",
			"plano"
		],
		"photos": [
			"office-cafe.jpg",
			"lobby-smart-vending.jpg",
			"micro-market-coffee.jpg",
			"espresso.jpg",
			"office-smart-fridge.webp",
			"smart-cooler-breakroom.jpeg"
		],
		"faq": {
			"question": "Our Tollway office building has several small tenants. Can we qualify for free placement as one location?",
			"answer": "Placement is free when total foot traffic at the location reaches 50 people, counting employees and visitors, so a shared lobby or building break room can qualify even when each tenant is small. There is no long-term contract."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Addison,_Texas",
			"https://www.addisontx.gov/Government/About-Addison",
			"https://en.wikipedia.org/wiki/Addison_Airport",
			"https://www.addisonairport.net/About-ADS/Location",
			"https://www.dmagazine.com/publications/d-ceo/2023/november/state-of-dfw/",
			"https://en.wikivoyage.org/wiki/Addison",
			"https://www.bdcnetwork.com/home/news/55154686/billion-dollar-mixed-use-development-under-way-near-dallas",
			"https://en.wikipedia.org/wiki/Addison_station_(DART)"
		]
	},
	{
		"slug": "allen",
		"name": "Allen",
		"region": "Collin County and North",
		"county": "Collin County",
		"highways": "US-75 and the Sam Rayburn Tollway (SH-121)",
		"about": [
			"Allen's newer offices center on Watters Creek, where the One Bethany development adds Class A office space. Major employers include Experian, Jack Henry & Associates, Motorola Solutions, NetScout, Crawford & Company, and Credit Union of Texas, and Texas Health Presbyterian Hospital Allen is among the city's largest. Sol-Ark is moving its headquarters and production to Allen, and Fibergrate moved its corporate headquarters here in 2024.",
			"Office teams near Watters Creek have restaurants nearby but still want coffee and quick food in the building. The hospital, the Collin College Technical Campus in west Allen, and Allen ISD schools run on schedules that start early and end late. Event nights at the Credit Union of Texas Event Center and shoppers at Allen Premium Outlets bring large public crowds."
		],
		"businessAreas": [
			{
				"name": "Watters Creek at Montgomery Farm",
				"note": "mixed-use center with a convention center operated with a Marriott hotel"
			},
			{
				"name": "One Bethany",
				"note": "Class A office development next to Watters Creek, including the eight-story One Bethany West"
			},
			{
				"name": "Credit Union of Texas Event Center",
				"note": "arena formerly called the Allen Event Center"
			},
			{
				"name": "Allen Premium Outlets",
				"note": "outlet shopping center with retail staff and visitors"
			},
			{
				"name": "Collin College Technical Campus",
				"note": "workforce education campus in west Allen, opened in 2020"
			}
		],
		"focus": [
			"offices",
			"hospitals",
			"education",
			"hospitality"
		],
		"nearby": [
			"plano",
			"mckinney",
			"richardson",
			"frisco",
			"wylie"
		],
		"photos": [
			"lounge-smart-coolers.png",
			"micro-market-stations.jpg",
			"team-lunch.jpg",
			"coffee-station.jpg",
			"smart-cooler-kiosk.jpeg",
			"office-lounge.png"
		],
		"faq": {
			"question": "We already have machines from another vendor at our Allen office. Do we have to start over?",
			"answer": "No. We repair and move machines from any supplier, and we do not require a long-term contract. Local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Allen,_Texas",
			"https://www.tradeandindustrydev.com/region/texas/tx-allen-econ-dev-corp-sees-new-commercial-16973"
		]
	},
	{
		"slug": "rowlett",
		"name": "Rowlett",
		"region": "East of Dallas",
		"county": "Dallas and Rockwall Counties",
		"highways": "the President George Bush Turnpike, I-30, and SH-66 (Lakeview Parkway)",
		"about": [
			"Rowlett sits on Lake Ray Hubbard and is served by the President George Bush Turnpike, I-30, and DART's Blue Line. Baylor Scott & White Medical Center – Lake Pointe is on Scenic Drive, with outpatient offices along Lakeview Parkway. On the North Shore, Jackson-Shaw's Lakeview Business District is adding industrial buildings along the turnpike, and SAF Holland, a maker of trailer, truck, and bus parts, has leased one of them. Sapphire Bay, a mixed-use project on the lakeshore, is adding restaurants, homes, and a planned Hyatt-run resort.",
			"That gives Rowlett a mix of hospital staff on rotating shifts, new plant and warehouse crews on the North Shore, and restaurant and retail workers by the lake. A smart cooler or micro market open around the clock suits the hospital and industrial buildings. Cashless payment and restocking based on sales keep food available when shifts change."
		],
		"businessAreas": [
			{
				"name": "Lakeview Business District (North Shore)",
				"note": "new industrial park on the Bush Turnpike at Merritt and Liberty Grove roads, with SAF Holland in one building"
			},
			{
				"name": "Baylor Scott & White Medical Center – Lake Pointe",
				"note": "hospital on Scenic Drive, with outpatient offices on Lakeview Parkway"
			},
			{
				"name": "Sapphire Bay",
				"note": "mixed-use development on Lake Ray Hubbard with restaurants, homes, and a planned Hyatt-run resort"
			},
			{
				"name": "Lakeview Parkway (SH-66)",
				"note": "state highway through Rowlett with Baylor Scott & White outpatient offices"
			},
			{
				"name": "Downtown Rowlett",
				"note": "served by DART's Blue Line at Downtown Rowlett station"
			}
		],
		"focus": [
			"hospitals",
			"manufacturing",
			"warehouses",
			"education"
		],
		"nearby": [
			"wylie",
			"richardson",
			"royse-city",
			"forney",
			"dallas"
		],
		"photos": [
			"full-line-vending.jpeg",
			"employee-cafeteria.png",
			"smart-cooler-unlock.jpg",
			"team-break.jpg",
			"vending-row.jpeg",
			"micro-market-fresh.png"
		],
		"faq": {
			"question": "Can you serve a new industrial building on Rowlett's North Shore as soon as our team moves in?",
			"answer": "Yes. If the building will have at least 50 people in total foot traffic, equipment, delivery, and setup are free, and we plan service visits around your shifts, docks, and badge rules."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Rowlett,_Texas",
			"https://dallasinnovates.com/north-shore-rowlett-is-getting-a-new-nearly-2-million-sf-business-district/",
			"https://rebusinessonline.com/?p=399788",
			"https://www.bswhealth.com/Locations/Service-Area/Rowlett-TX/Heart-and-Vascular",
			"https://www.tradeandindustrydev.com/region/texas/news/tx-bombshells-rowlett-opens-1b-sapphire-bay-35968.md"
		]
	},
	{
		"slug": "sherman",
		"name": "Sherman",
		"region": "North Corridor",
		"county": "Grayson County (Sherman, Van Alstyne, Howe, Gunter) and Collin County (Anna, Melissa, Celina), with part of Celina in Denton County",
		"highways": "US-75, US-82, SH-121, SH-5, and SH-289 (Preston Road)",
		"about": [
			"Sherman, the Grayson County seat, anchors the North Corridor. Texas Instruments started production at its first 300mm wafer fab in Sherman in December 2025, GlobalWafers opened a silicon wafer plant there in May 2025, and equipment suppliers such as Tokyo Electron are building in Progress Park in south Sherman. Tyson Foods, Sunny Delight Beverages, Progress Rail, Coherent, and Austin College are other large employers in Sherman, while south on US-75 Van Alstyne, Howe, Anna, and Melissa are adding schools and contractors fast, and to the west SH-289 links Gunter to Celina, where Methodist Celina Medical Center opened in March 2025.",
			"Plants in Sherman run shifts that start before and end after normal restaurant hours, often behind badge-controlled entrances. In Anna and Melissa, school districts and concrete and construction firms are among the largest employers, with crews that start before dawn. The towns are spread out along US-75 and SH-289, so on-site food matters more here than in a dense suburb."
		],
		"businessAreas": [
			{
				"name": "Texas Instruments Sherman fab site",
				"note": "TI's 300mm wafer fab campus, with its first fab, SM1, in production since December 2025"
			},
			{
				"name": "GlobalWafers Sherman",
				"note": "300mm silicon wafer plant that opened in May 2025"
			},
			{
				"name": "Progress Park",
				"note": "Sherman's master-planned business park, with semiconductor equipment suppliers in its newest phase in south Sherman"
			},
			{
				"name": "US-75 through Anna and Melissa",
				"note": "fast-growing stretch where school districts, concrete firms, Walmart, and Buc-ee's are major employers"
			},
			{
				"name": "Celina on SH-289 and the Dallas Parkway",
				"note": "home to Methodist Celina Medical Center, the city's first full-service hospital"
			}
		],
		"focus": [
			"manufacturing",
			"education",
			"hospitals"
		],
		"nearby": [
			"mckinney",
			"prosper",
			"allen",
			"frisco"
		],
		"towns": [
			{
				"name": "Sherman",
				"county": "Grayson County (county seat)",
				"note": "on US-75 and US-82, home to Texas Instruments' new wafer fab and Austin College"
			},
			{
				"name": "Melissa",
				"county": "Collin County",
				"note": "where US-75, SH-5, and SH-121 run through town, with Melissa ISD as the largest employer"
			},
			{
				"name": "Anna",
				"county": "Collin County",
				"note": "on US-75 in northern Collin County, where Anna ISD is the largest employer"
			},
			{
				"name": "Van Alstyne",
				"county": "Grayson County, extending slightly into Collin County",
				"note": "on US-75 and SH-5, with a Grayson College branch campus"
			},
			{
				"name": "Howe",
				"county": "Grayson County",
				"note": "where US-75, SH-5, and FM 902 meet in southern Grayson County"
			},
			{
				"name": "Gunter",
				"county": "Grayson County",
				"note": "in southwest Grayson County on SH-289, between Celina and Sherman"
			},
			{
				"name": "Celina",
				"county": "Collin and Denton Counties",
				"note": "centered on SH-289 (Preston Road), where Methodist Celina Medical Center opened in March 2025"
			}
		],
		"photos": [
			"plant-manager-vending.png",
			"workers-breakroom-vending.jpeg",
			"smart-cooler-fresh-food.jpeg",
			"workers-lunch.avif",
			"vending-row.jpeg",
			"texas-vending-coolers.png"
		],
		"faq": {
			"question": "Do you place machines at plants and job sites north of McKinney, all the way to Sherman?",
			"answer": "Yes. We serve Sherman, Melissa, Anna, Van Alstyne, Howe, Gunter, and Celina, and placement is free, including equipment, delivery, and setup, at locations with at least 50 people in total foot traffic. Local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Sherman,_Texas",
			"https://www.ti.com/about-ti/manufacturing/sherman.html",
			"https://dallasinnovates.com/texas-instruments-starts-production-at-new-semiconductor-fab-in-north-texas/",
			"https://www.kxii.com/2025/05/15/globalwafers-opens-first-us-advanced-silicon-wafer-facility-sherman",
			"https://evertiq.com/design/2025-05-21-globalwafers-opens-texas-wafer-plant-announces-major-expansionr",
			"https://www.kxii.com/2023/10/17/sedco-approves-land-sale-two-industrial-suppliers",
			"https://www.bisnow.com/news/dallas-ft-worth/economic-development/sherman-industrial-park-looking-to-expand-79690",
			"https://en.wikipedia.org/wiki/Melissa,_Texas",
			"https://en.wikipedia.org/wiki/Anna,_Texas",
			"https://en.wikipedia.org/wiki/Van_Alstyne,_Texas",
			"https://en.wikipedia.org/wiki/Howe,_Texas",
			"https://en.wikipedia.org/wiki/Gunter,_Texas",
			"https://en.wikipedia.org/wiki/Celina,_Texas",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_289",
			"https://celinaedc.com/about/news-press-releases/new-hospital-in-celina"
		]
	},
	{
		"slug": "forney",
		"name": "Forney",
		"region": "East of Dallas",
		"county": "Kaufman County",
		"highways": "US-80, with I-20 about 4 miles south",
		"about": [
			"Forney is in northwestern Kaufman County, on US-80 about 20 miles east of downtown Dallas. Most of its industrial growth is in Gateway, a large development on the south side of US-80 at Gateway Boulevard. There, Amazon runs a distribution center and Goodyear runs a distribution center that opened in spring 2020. Steve Silver Furniture has its headquarters and distribution center in Forney, and Mustang Creek Business Park has access to both US-80 and I-20.",
			"Distribution buildings this size run long shifts with crews spread across big floors. Several stations, or a micro market near the break area, cut the walk to food. Restocking based on sales keeps fast sellers full during peak season. Forney ISD's campuses add school staff to the mix."
		],
		"businessAreas": [
			{
				"name": "Gateway",
				"note": "mixed-use development on US-80 at Gateway Boulevard with Amazon's and Goodyear's distribution centers"
			},
			{
				"name": "Mustang Creek Business Park",
				"note": "north and south business parks with access to US-80 and I-20"
			},
			{
				"name": "Steve Silver Furniture",
				"note": "furniture distributor with its headquarters and distribution center in Forney"
			},
			{
				"name": "Downtown Forney",
				"note": "historic center of the town the Texas Legislature named the Antique Capital of Texas"
			}
		],
		"focus": [
			"warehouses",
			"logistics",
			"education"
		],
		"nearby": [
			"kaufman",
			"royse-city",
			"rowlett",
			"dallas"
		],
		"photos": [
			"warehouse-cafeteria.avif",
			"smart-cooler-kiosk.jpeg",
			"drink-coolers-kiosk.jpeg",
			"workers-lunch.avif",
			"phone-pay-vending.jpg",
			"full-line-vending.jpeg"
		],
		"faq": {
			"question": "Can you service a distribution center in Forney's Gateway area without disrupting dock schedules?",
			"answer": "Yes. We plan service visits around shifts, docks, and badge rules. Real-time monitoring tells us what needs restocking before the visit."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Forney,_Texas",
			"https://forneytexasedc.org/sectors/logistics",
			"https://forneytexasedc.org/properties-and-projects/industrial-and-commercial"
		]
	},
	{
		"slug": "wylie",
		"name": "Wylie",
		"region": "Collin County and North",
		"county": "Collin, Dallas, and Rockwall Counties",
		"highways": "SH-78 and FM 544",
		"about": [
			"Wylie lies between Lavon Lake and Lake Ray Hubbard, with SH-78 as its main highway and a freight rail line running roughly parallel to it. Sanden, which makes car air conditioning compressors, has its U.S. headquarters and compressor plant on Sanden Boulevard, and it opened an electric vehicle AC compressor line there in 2023. Canadian Pacific Kansas City runs the Wylie Intermodal Terminal on the same rail line. The Wylie EDC names logistics, precision manufacturing, and window and door manufacturing as its main industries.",
			"Plant and terminal crews work fixed shifts with short breaks, so food has to be close to the floor. Full-line machines or a smart cooler near the time clock cover those breaks, and real-time monitoring keeps the right items stocked. Collin College's Wylie campus and the downtown shops on Ballard Avenue add students and small office teams to the mix."
		],
		"businessAreas": [
			{
				"name": "Sanden Boulevard",
				"note": "Sanden's U.S. headquarters and automotive compressor plant"
			},
			{
				"name": "Wylie Intermodal Terminal",
				"note": "Canadian Pacific Kansas City rail terminal along the SH-78 line"
			},
			{
				"name": "SH-78 corridor",
				"note": "the city's main highway, where the Wylie EDC is based"
			},
			{
				"name": "Historic Downtown Wylie (Ballard Avenue)",
				"note": "brick-lined district of local shops, cafes, and restaurants"
			},
			{
				"name": "Collin College Wylie Campus",
				"note": "community college campus that opened in August 2020"
			}
		],
		"focus": [
			"manufacturing",
			"logistics",
			"education"
		],
		"nearby": [
			"allen",
			"rowlett",
			"mckinney",
			"richardson"
		],
		"photos": [
			"employee-cafeteria.png",
			"plant-manager-vending.png",
			"micro-market-shelving.jpg",
			"smart-cooler-phone.jpg",
			"team-break.jpg",
			"vending-row.jpeg"
		],
		"faq": {
			"question": "Our Wylie plant runs nights. Can the break room stay open after the day shift leaves?",
			"answer": "Yes. Micro markets are open around the clock, and smart coolers unlock with a tap and charge automatically, so night crews can buy food without a cashier."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Wylie,_Texas",
			"https://wylieedc.com/site-selection/key-industries",
			"https://wylieedc.com/about-us/latest-news/sanden-expansion",
			"https://wylieedc.com/",
			"https://business.wyliechamber.org/list/member/wylie-downtown-merchants-association-2444"
		]
	},
	{
		"slug": "kaufman",
		"name": "Kaufman",
		"region": "East of Dallas",
		"county": "Kaufman County (county seat)",
		"highways": "US-175, SH-34, and SH-243",
		"about": [
			"Kaufman is the Kaufman County seat. US-175 passes its southwest side, and SH-34 runs past the south and east sides. County government is based here, including the Kaufman County Justice Center, and Texas Health Kaufman runs a hospital on Ed Hall Drive. Trinity Valley Community College runs its Health Science Center here. The Kaufman EDC is developing an industrial site on US-175 next to the Justice Center. Galleher Industries makes lumber and metal products for trucking in town, and a cold storage plant is going in off the SH-34 bypass.",
			"Justice center and hospital staff work around the clock, often with no time to leave for a meal. A smart cooler with fresh sandwiches, salads, and breakfast items covers night shifts and long court days. Cashless payment means nobody needs exact change."
		],
		"businessAreas": [
			{
				"name": "Kaufman County Justice Center and US-175 industrial site",
				"note": "county justice complex next to land the Kaufman EDC is preparing for industrial users"
			},
			{
				"name": "Texas Health Kaufman",
				"note": "hospital on Ed Hall Drive serving Kaufman, Forney, Terrell, and nearby towns"
			},
			{
				"name": "Kings Fort",
				"note": "commercial area on US-175 anchored by Walmart and Lowe's"
			},
			{
				"name": "Downtown Kaufman Square",
				"note": "the downtown square, a focus of new retail and restaurant growth"
			},
			{
				"name": "Trinity Valley Community College Health Science Center",
				"note": "nursing and health training campus in Kaufman"
			}
		],
		"focus": [
			"hospitals",
			"offices",
			"manufacturing",
			"education"
		],
		"nearby": [
			"forney",
			"royse-city",
			"waxahachie",
			"dallas"
		],
		"photos": [
			"workers-breakroom-vending.jpeg",
			"vending-row.jpeg",
			"smart-cooler-breakroom.jpeg",
			"workers-lunch.avif",
			"drink-coolers-snacks.webp",
			"technician-vending.jpg"
		],
		"faq": {
			"question": "Can you put fresh food in a Kaufman County office or hospital break room that runs overnight?",
			"answer": "Yes. Smart coolers and micro markets are open around the clock and carry sandwiches, wraps, salads, meals, and breakfast items. Local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Kaufman,_Texas",
			"https://en.wikipedia.org/wiki/Kaufman_County,_Texas",
			"https://www.inforney.com/local-news/kaufman-s-edc-director-talks-growth-opportunity-and-the-future-of-industrial-expansion/article_1c0eb590-e7c5-11ef-ae61-6bf6feedc7b7.html",
			"https://www.texashealth.org/Locations/Texas-Health-Kaufman",
			"https://rebusinessonline.com/walmart-supercenter-to-break-ground-at-kings-fort-in-kaufman/",
			"https://www.commercialcafe.com/commercial-property/us/tx/kaufman/shops-at-kings-fort/"
		]
	},
	{
		"slug": "bedford",
		"name": "Bedford",
		"region": "Fort Worth and Tarrant County",
		"county": "Tarrant County",
		"highways": "SH-183 (Airport Freeway) and SH-121",
		"about": [
			"Bedford is the health care center of the Hurst-Euless-Bedford area. Texas Health Harris Methodist Hospital Hurst-Euless-Bedford sits on Hospital Parkway, Texas Health Resources is the city's largest employer, and Carter BloodCare runs its headquarters campus on SH-121. State National Companies and Daystar Television Network are also among the top employers.",
			"Hospital and blood center staff work nights and weekends, when cafeterias may be closed. Micro markets stay open around the clock with sandwiches, wraps, salads, and meals, and real-time monitoring drives restocking based on sales. Offices along Airport Freeway keep more standard hours and often want coffee as well."
		],
		"businessAreas": [
			{
				"name": "Texas Health Harris Methodist Hospital Hurst-Euless-Bedford",
				"note": "acute care hospital on Hospital Parkway"
			},
			{
				"name": "Carter BloodCare headquarters",
				"note": "regional blood center campus on SH-121 near DFW Airport"
			},
			{
				"name": "Airport Freeway (SH-183) corridor",
				"note": "office buildings plus the new Market at Gateway retail project at North Industrial Boulevard"
			},
			{
				"name": "Bedford Commons",
				"note": "city-led mixed-use redevelopment between SH-183, Bedford Road, Forest Ridge Drive, and Central Drive"
			}
		],
		"focus": [
			"hospitals",
			"offices",
			"education"
		],
		"nearby": [
			"hurst",
			"euless",
			"arlington",
			"southlake",
			"keller"
		],
		"photos": [
			"smart-cooler-fresh-food.jpeg",
			"lounge-smart-coolers.png",
			"stocking-fresh-food.jpg",
			"smart-cooler-unlock.jpg",
			"coffee-station.jpg",
			"micro-market-breakroom.jpeg"
		],
		"faq": {
			"question": "The hospital cafeteria near us closes overnight. What can our night staff in Bedford buy?",
			"answer": "Our micro markets are open around the clock with sandwiches, wraps, salads, meals, and breakfast items, and we restock based on real-time sales."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Bedford,_Texas",
			"https://ahd.com/free_profile/450639/Texas_Health_HEB/Bedford/Texas",
			"https://www.carterbloodcare.org/who-we-are/newsroom/news-releases/now-hiring-carter-bloodcare-hosts-job-fair-oct-11-in-bedford/",
			"https://www.guidestar.org/profile/75-1035606",
			"https://hoodline.com/2026/07/sprouts-sweets-and-new-homes-set-to-shake-up-bedford-s-airport-freeway-corner/",
			"https://citybudgets.tarrantcounty.com/flipbook/CityBudgets/2024/Bedford/files/basic-html/page329.html",
			"https://txreproperties.com/location/1600-airport-freeway/"
		]
	},
	{
		"slug": "richardson",
		"name": "Richardson",
		"region": "Dallas and Central",
		"county": "Dallas and Collin Counties",
		"highways": "US-75, the President George Bush Turnpike, and I-635",
		"about": [
			"Richardson's office base grew along the Telecom Corridor on US-75, and part of it was rebranded in 2019 as the Richardson Innovation Quarter (the IQ), where Ericsson, Siemens, and id Software operate. CityLine, at US-75 and the Bush Turnpike, counts State Farm among its corporate tenants. Blue Cross and Blue Shield of Texas, Lennox International, RealPage, and Fossil Group have headquarters in the city, and UT Dallas is one of its largest employers.",
			"Much of that work is in tech, insurance, and research, often in buildings where people stay at their desks through lunch. UT Dallas adds students, researchers, and staff, and Methodist Richardson Medical Center at Bush Turnpike and Renner Road runs around the clock. DART stations at CityLine/Bush, Galatyn Park, Arapaho Center, and Spring Valley connect commuters to these offices."
		],
		"businessAreas": [
			{
				"name": "Richardson Innovation Quarter (The IQ)",
				"note": "former Telecom Corridor district between Campbell and Apollo Roads, with UT Dallas research space at the IQ HQ"
			},
			{
				"name": "CityLine",
				"note": "mixed-use campus at US-75 and the Bush Turnpike with State Farm offices and a DART station"
			},
			{
				"name": "UT Dallas",
				"note": "public research university served by a DART Silver Line station"
			},
			{
				"name": "Galatyn Park",
				"note": "urban center with a plaza, hotel, and DART station"
			},
			{
				"name": "Methodist Richardson Medical Center",
				"note": "acute-care hospital at the Bush Turnpike and Renner Road"
			}
		],
		"focus": [
			"offices",
			"education",
			"hospitals"
		],
		"nearby": [
			"plano",
			"addison",
			"dallas",
			"allen",
			"wylie"
		],
		"photos": [
			"office-smart-fridge.webp",
			"smart-cooler-breakroom.jpeg",
			"micro-market-fresh.png",
			"office-cafe.jpg",
			"smart-cooler-unlock.jpg",
			"office-campus.jpeg"
		],
		"faq": {
			"question": "Our lab in the IQ has people working late. Can they buy food after hours without cash?",
			"answer": "Yes. Smart coolers tap to unlock and charge automatically, and micro markets stay open around the clock. Both can carry sandwiches, wraps, salads, and meals."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Richardson,_Texas",
			"https://dallasinnovates.com/a-global-influencer-of-technology-and-innovation-richardson-opens-hq-for-its-innovation-quarter/",
			"https://communityimpact.com/richardson/development/richardson-iqhq-to-support-citys-continued-tech-growth/",
			"https://communityimpact.com/richardson/development/cityline-campus-in-richardson-sold-to-real-estate-firm/",
			"https://r-o.com/projects/healthcare/hospitals/methodist-richardson-medical-center-bush-renner/"
		]
	},
	{
		"slug": "prosper",
		"name": "Prosper",
		"region": "Collin County and North",
		"county": "Collin and Denton Counties",
		"highways": "US-380, the Dallas North Tollway, and Preston Road (SH-289)",
		"about": [
			"Prosper is still mostly residential, and its largest employer is Prosper ISD, followed by retailers and restaurants such as Kroger, Chick-fil-A, Walmart, and Home Depot. Commercial growth is concentrated along US-380, the town's southern border with Frisco. Cook Children's opened a medical center off US-380 in late 2022, and Children's Health opened a specialty center at US-380 and the Dallas North Tollway in 2023.",
			"The Dallas North Tollway is being extended north through town, and the town expects the corridor to bring more offices and employers. Schools and pediatric medical centers are the main workplaces today, with staff on early and extended schedules. Downtown Prosper adds restaurants, shops, and small financial and real estate offices."
		],
		"businessAreas": [
			{
				"name": "US-380 corridor",
				"note": "the town's southern border, home to Cook Children's Medical Center-Prosper and retail centers"
			},
			{
				"name": "Children's Health Prosper campus",
				"note": "specialty center with urgent care and pediatric clinics at US-380 and the Dallas North Tollway"
			},
			{
				"name": "Dallas North Tollway extension",
				"note": "tollway being built north through town, planned as an economic development corridor"
			},
			{
				"name": "Preston Road (SH-289)",
				"note": "north-south route through town that meets US-380 at the Frisco-Prosper line"
			},
			{
				"name": "Downtown Prosper",
				"note": "restaurants, boutique shops, and small service, financial, and real estate firms"
			}
		],
		"focus": [
			"education",
			"hospitals",
			"offices"
		],
		"nearby": [
			"frisco",
			"mckinney",
			"sherman",
			"the-colony"
		],
		"photos": [
			"texas-vending-coolers.png",
			"micro-market-coffee.jpg",
			"smart-cooler-kiosk.jpeg",
			"team-lunch.jpg",
			"smart-cooler-phone.jpg",
			"lobby-smart-vending.jpg"
		],
		"faq": {
			"question": "We are opening a new office or clinic on US-380 in Prosper. Do we qualify for free placement?",
			"answer": "Placement is free, including equipment, delivery, and setup, when total foot traffic, employees and visitors, is at least 50 people. There is no long-term contract."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Prosper,_Texas",
			"https://prosperedc.com/site-selection/infrastructure-map-room/",
			"https://prospertx.gov/faq.aspx?TID=22",
			"https://prosperedc.com/living-here/visit-downtown-prosper/",
			"https://www.nbcdfw.com/news/local/cook-childrens-to-open-new-medical-center-in-prosper/3127756/",
			"https://about.childrens.com/newsroom/latest-news/childrens-health-prosper-specialty-center-opens/",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_289"
		]
	},
	{
		"slug": "mckinney",
		"name": "McKinney",
		"region": "Collin County and North",
		"county": "Collin County (county seat)",
		"highways": "US-75, US-380, SH-5, and the Sam Rayburn Tollway (SH-121) along the Allen border",
		"about": [
			"McKinney mixes manufacturing, corporate offices, and county government. Raytheon is the city's largest employer, and Encore Wire runs a single-site wire manufacturing campus here, alongside Globe Life, Simpson Strong-Tie, and Collin County. Office development centers on the McKinney Corporate Center at Craig Ranch near SH-121, and new industrial buildings are going up around McKinney National Airport in the southeast part of the city.",
			"Plants and industrial buildings here run shifts and have docks and gates that service visits have to work around. Medical City McKinney and Baylor Scott & White McKinney staff around the clock, and county offices see a steady flow of public visitors. Offices at Craig Ranch and the historic downtown square need a smaller setup, often coffee and fresh food for a single floor."
		],
		"businessAreas": [
			{
				"name": "McKinney Corporate Center at Craig Ranch",
				"note": "office park near SH-121 chosen by Independent Bank for its headquarters"
			},
			{
				"name": "McKinney National Airport",
				"note": "general aviation airport in southeast McKinney with a commercial terminal expansion under way"
			},
			{
				"name": "McKinney Air Business Park",
				"note": "industrial development near McKinney National Airport"
			},
			{
				"name": "Encore Wire campus",
				"note": "single-site wire manufacturing campus"
			},
			{
				"name": "Downtown McKinney",
				"note": "historic downtown square around the county seat"
			}
		],
		"focus": [
			"manufacturing",
			"warehouses",
			"hospitals",
			"offices"
		],
		"nearby": [
			"allen",
			"prosper",
			"frisco",
			"sherman",
			"plano"
		],
		"photos": [
			"micro-market-stations.jpg",
			"office-breakroom-coolers.png",
			"plant-manager-vending.png",
			"stocking-fresh-food.jpg",
			"vending-row.jpeg",
			"coffee-station.jpg"
		],
		"faq": {
			"question": "Our plant near the airport runs three shifts. Will restocking get in the way of the docks?",
			"answer": "We plan service visits around your shifts, docks, and badge rules. Local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/McKinney,_Texas",
			"https://www.bisnow.com/news/dallas-ft-worth/industrial/northern-suburb-emerges-as-hottest-industrial-market-in-the-metroplex-131289",
			"https://communityimpact.com/mckinney/medc-updates-strategic-plan-grow-business-mckinney/",
			"https://craiginternational.com/120-million-hub-121-development-coming-tomckinney-corporate-center-craig-ranch",
			"https://www.encorewire.com/articles/2023/04/encore-wire-celebrates-35-years.html"
		]
	},
	{
		"slug": "roanoke",
		"name": "Roanoke",
		"region": "Fort Worth and Tarrant County",
		"county": "Denton County, with a small part in Tarrant County",
		"highways": "SH-114 (Northwest Parkway), US-377, and Byron Nelson Boulevard (Business SH-114)",
		"about": [
			"Roanoke pairs a dining district with distribution work. The city calls itself the Unique Dining Capital of Texas, and most of its restaurants sit on historic Oak Street or US-377. Along SH-114 and toward the Alliance industrial complex, large distribution buildings hold employers such as General Motors, W.W. Grainger, Martin Brower, Cardinal Health, and AmerisourceBergen, all on the city's 2022 list of principal employers.",
			"That gives Roanoke two kinds of break rooms. Warehouse and distribution crews work shifts and need food at odd hours, while restaurant staff work evenings and weekends. Micro markets stay open around the clock, and service visits are planned around shifts and dock schedules."
		],
		"businessAreas": [
			{
				"name": "Oak Street",
				"note": "historic downtown street with a growing row of restaurants and bars"
			},
			{
				"name": "US-377 corridor",
				"note": "where many of the city's restaurants and retailers sit"
			},
			{
				"name": "SH-114 corridor",
				"note": "large distribution buildings such as the Highway 114 Distribution Center"
			},
			{
				"name": "Byron Nelson Boulevard",
				"note": "Business SH-114, the old highway route through town"
			},
			{
				"name": "Alliance industrial complex",
				"note": "large industrial area near Alliance Airport, a short drive from town"
			}
		],
		"focus": [
			"logistics",
			"warehouses",
			"hospitality"
		],
		"nearby": [
			"alliance",
			"keller",
			"southlake",
			"fort-worth"
		],
		"photos": [
			"drink-coolers-kiosk.jpeg",
			"warehouse-worker-break.avif",
			"multi-door-cooler.jpeg",
			"worker-cashless-cooler.webp",
			"smart-cooler-kiosk.jpeg",
			"workers-breakroom-vending.jpeg"
		],
		"faq": {
			"question": "Our distribution center off SH-114 runs a night shift. Can those workers get real food?",
			"answer": "Yes. Our micro markets are open around the clock and carry sandwiches, wraps, salads, meals, and breakfast items, restocked based on what sells."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Roanoke,_Texas",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_114",
			"https://roanoketexas.gov/92/Businesses",
			"https://communityimpact.com/keller-roanoke-northeast-fort-worth/dining/recipe-for-growth-roanoke-bolsters-development-with-unique-dining-options/",
			"https://www.costar.com/article/902610198/work-begins-on-new-roanoke-industrial-building"
		]
	},
	{
		"slug": "the-colony",
		"name": "The Colony",
		"region": "Collin County and North",
		"county": "Denton County",
		"highways": "the Sam Rayburn Tollway (SH-121) and FM 423",
		"about": [
			"The Colony is a Denton County city on the east shore of Lewisville Lake, with its commercial growth concentrated along SH-121. Grandscape, a large mixed-use retail and entertainment development, is anchored by Nebraska Furniture Mart and Scheels. Pizza Inn and Edward Don run distribution centers across from Nebraska Furniture Mart, and The Cascades and Austin Ranch add mixed-use space near the tollway.",
			"Stores, restaurants, and entertainment venues at Grandscape staff early setup, late close, and weekend shifts, often with seasonal crews. Distribution centers nearby work to dock schedules that rarely line up with lunch. Both kinds of teams need food on site at hours when nearby kitchens are busy with customers or closed."
		],
		"businessAreas": [
			{
				"name": "Grandscape",
				"note": "mixed-use retail, dining, and entertainment district on SH-121, anchored by Nebraska Furniture Mart and Scheels"
			},
			{
				"name": "Distribution centers across from Nebraska Furniture Mart",
				"note": "Pizza Inn and Edward Don distribution sites"
			},
			{
				"name": "The Cascades",
				"note": "mixed-use development along SH-121"
			},
			{
				"name": "Austin Ranch",
				"note": "master-planned mixed-use community a few minutes from SH-121"
			}
		],
		"focus": [
			"hospitality",
			"warehouses",
			"logistics"
		],
		"nearby": [
			"frisco",
			"carrollton",
			"plano",
			"prosper"
		],
		"photos": [
			"micro-market-shelving.jpg",
			"drink-coolers-snacks.webp",
			"smart-cooler-fresh-food.jpeg",
			"team-break.jpg",
			"phone-pay-vending.jpg",
			"warehouse-cafeteria.avif"
		],
		"faq": {
			"question": "Our Grandscape team works from early setup to late close, plus weekends. Will the break room stay stocked?",
			"answer": "Machines report sales in real time, so restocking follows what your team buys, and service visits are planned around your shifts. Local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/The_Colony,_Texas",
			"https://thecolonyedc.org/wp-content/uploads/2025/05/2025RTAProfile.pdf",
			"https://business.thecolonychamber.com/list/member/nfm-texas-142",
			"https://thecolonyedc.org/?p=1119"
		]
	},
	{
		"slug": "farmers-branch",
		"name": "Farmers Branch",
		"region": "Dallas and Central",
		"county": "Dallas County",
		"highways": "I-35E on the west, I-635 on the south, and the Dallas North Tollway on the east",
		"about": [
			"Farmers Branch is an inner-ring suburb boxed in by I-35E, I-635, and the Dallas North Tollway. Its Tollway frontage is part of the Platinum Corridor, and its I-635 frontage continues the office corridor that runs west toward Irving. The city's largest employers include TDIndustries, the Internal Revenue Service, Trinity Industries, Southwestern Health Resources, o9 Solutions, and Southern Glazer's Wine and Spirits.",
			"The west side mixes warehouse and light industrial buildings in Valwood Park with Mercer Crossing, a newer development with an office park, apartments, and hotels. Many employers here run office teams on regular hours next to field crews, drivers, and warehouse shifts that start early. Brookhaven College, a Dallas College campus inside city limits, adds students and staff who eat between classes."
		],
		"businessAreas": [
			{
				"name": "Dallas North Tollway frontage",
				"note": "the city's eastern edge, part of the Platinum Corridor office market"
			},
			{
				"name": "I-635 (LBJ Freeway) frontage",
				"note": "office buildings that extend the I-635 office corridor west toward Irving"
			},
			{
				"name": "Mercer Crossing",
				"note": "mixed-use development at Luna Road and Whittington Lane with an office park, apartments, retail, and hotels"
			},
			{
				"name": "Valwood Park",
				"note": "industrial park on the Farmers Branch and Carrollton line with warehouse and distribution buildings"
			},
			{
				"name": "Brookhaven College (Dallas College)",
				"note": "community college campus inside Farmers Branch city limits"
			}
		],
		"focus": [
			"offices",
			"warehouses",
			"education"
		],
		"nearby": [
			"carrollton",
			"addison",
			"dallas",
			"coppell",
			"irving"
		],
		"photos": [
			"office-campus.jpeg",
			"workers-breakroom-vending.jpeg",
			"micro-market-breakroom.jpeg",
			"office-cafe.jpg",
			"multi-door-cooler.jpeg",
			"technician-vending.jpg"
		],
		"faq": {
			"question": "Our Valwood building runs early warehouse shifts and a daytime office staff. Can one setup cover both?",
			"answer": "Micro markets are open around the clock and take cards, mobile wallets, and tap-to-pay, so early shifts and office staff use the same setup. Service visits are planned around your shifts, docks, and badge rules."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Farmers_Branch,_Texas",
			"https://rebusinessonline.com/?p=174497",
			"https://centurionamerican.com/development/mercer-crossing/",
			"https://www.commercialsearch.com/commercial-property/us/tx/farmers-branch/valwood-park-1800-1850-diplomat-drive/",
			"https://www.commercialsearch.com/commercial-property/us/tx/farmers-branch/prologis-valwood-3/",
			"https://realtynewsreport.com/avera-builds-up-assemblage-in-dallas-area-business-park",
			"https://nctcog.org/getmedia/0ed32bde-699b-4d66-8934-cf00683e5477/FarmersBranch.pdf"
		]
	},
	{
		"slug": "carrollton",
		"name": "Carrollton",
		"region": "Dallas and Central",
		"county": "Dallas, Denton, and Collin Counties",
		"highways": "I-35E and the President George Bush Turnpike, with the Sam Rayburn Tollway (SH-121) at the far north end",
		"about": [
			"Carrollton's industrial base runs on logistics. The city lists seven major business parks, led by Valwood Industrial Park northwest of I-635 and I-35E and Frankford Trade Center on I-35E, which holds a Foreign Trade Zone. Large employers include Cencora, Halliburton, Thomson Reuters, Western Extrusions, and Securus Technologies, and G6 Hospitality, the parent of Motel 6, is headquartered here.",
			"Warehouse, extrusion, and assembly floors in these parks run early, late, and weekend shifts, often with short breaks and no restaurant within walking distance. Corporate offices keep steadier hours but large headcounts. Three DART rail stations and the A-train at Trinity Mills bring in commuters who arrive without a lunch plan."
		],
		"businessAreas": [
			{
				"name": "Valwood Industrial Park",
				"note": "the city's largest industrial park, northwest of I-635 and I-35E, extending into Farmers Branch"
			},
			{
				"name": "Frankford Trade Center",
				"note": "industrial park fronting I-35E with a Foreign Trade Zone"
			},
			{
				"name": "Trinity Mills",
				"note": "an industrial park of the same name and the DART station where the A-train to Lewisville and Denton begins"
			},
			{
				"name": "Koreatown Carrollton",
				"note": "Asian restaurants and businesses at Old Denton Road and the Bush Turnpike"
			},
			{
				"name": "Downtown Carrollton",
				"note": "city center with a DART station on the Green Line and the Silver Line to DFW Airport"
			}
		],
		"focus": [
			"warehouses",
			"logistics",
			"manufacturing",
			"offices"
		],
		"nearby": [
			"farmers-branch",
			"coppell",
			"addison",
			"the-colony",
			"dallas"
		],
		"photos": [
			"distribution-breakroom.jpeg",
			"plant-manager-vending.png",
			"smart-cooler-breakroom.jpeg",
			"workers-lunch.avif",
			"drink-coolers-kiosk.jpeg",
			"employee-cafeteria.png"
		],
		"faq": {
			"question": "We run a three-shift distribution center in Valwood. How do you restock without getting in the way of the docks?",
			"answer": "Service visits are planned around your shifts, docks, and badge rules, and restocking follows real-time sales from each machine. If a machine has a problem, local technicians respond to reported issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Carrollton,_Texas",
			"https://www.carrolltontxdevelopment.com/community/business-parks",
			"https://www.carrolltontxdevelopment.com/site-selectors/business-parks/industrial-parks",
			"https://capitalanalyticsassociates.com/?p=65866",
			"https://www.commercialsearch.com/commercial-property/us/tx/carrollton/valwood-industrial-park-1270-champion-circle/",
			"https://www.dart.org/about/news-and-events/newsreleases/newsrelease-detail/silver-line-launches-oct.-25--connecting-seven-cities-and-dfw-airport-with-modern--reliable-transit"
		]
	},
	{
		"slug": "southlake",
		"name": "Southlake",
		"region": "Fort Worth and Tarrant County",
		"county": "Tarrant County, with small areas in Denton County",
		"highways": "SH-114, SH-26, Southlake Boulevard (FM 1709), and Davis Boulevard (FM 1938)",
		"about": [
			"Southlake's business base is corporate offices. The Solana business park on SH-114 holds Sabre's headquarters on Sabre Drive, and Charles Schwab tops the city's latest list of largest employers. Carroll ISD, Verizon Wireless, Keller Williams, and Gateway Church are other large employers.",
			"Southlake Town Square and Southlake Boulevard add shops, restaurants, and medical offices, including Texas Health Harris Methodist Hospital Southlake. Office teams here tend to want good coffee and fresh food, not only snacks. Coffee machine installation is free, with consumables paid, and smart coolers stocked with sandwiches, salads, and breakfast items unlock with a tap and charge automatically."
		],
		"businessAreas": [
			{
				"name": "Solana business park",
				"note": "office campus on SH-114 with Sabre's headquarters on Sabre Drive"
			},
			{
				"name": "Southlake Town Square",
				"note": "shopping and dining center at SH-114 and Southlake Boulevard"
			},
			{
				"name": "Southlake Boulevard (FM 1709)",
				"note": "main east-west corridor, home to Texas Health Harris Methodist Hospital Southlake"
			},
			{
				"name": "Gateway Church Southlake campus",
				"note": "large church campus across SH-114 from Town Square"
			},
			{
				"name": "East SH-114 near DFW Airport",
				"note": "industrial sites, including fuel storage and distribution and concrete works"
			}
		],
		"focus": [
			"offices",
			"hospitals",
			"education"
		],
		"nearby": [
			"keller",
			"roanoke",
			"coppell",
			"bedford",
			"hurst"
		],
		"photos": [
			"office-lounge.png",
			"espresso.jpg",
			"office-smart-fridge.webp",
			"meeting-salads.jpg",
			"smart-coolers-kitchen.jpeg",
			"micro-market-coffee.jpg"
		],
		"faq": {
			"question": "Our office near SH-114 wants a coffee setup along with snacks. How does coffee work?",
			"answer": "We install the coffee machine free of charge. You pay only for the coffee and other consumables."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Southlake,_Texas",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_26",
			"https://citybudgets.tarrantcounty.com/flipbook/CityBudgets/2026/Southlake/files/basic-html/page94.html",
			"https://www.connectcre.com/stories/jv-acquires-sabre-hq-building-in-southlake/",
			"https://communityimpact.com/grapevine-colleyville-southlake/healthcare/guide-hospitals-urgent-care-facilities-grapevine-colleyville-southlake/",
			"https://editions.communityimpact.com/view/3331579/18",
			"https://wfaa.com/article/news/southlake-mega-church-debuts-massive-new-home/287-338194908"
		]
	},
	{
		"slug": "euless",
		"name": "Euless",
		"region": "DFW Airport Area",
		"county": "Tarrant County",
		"highways": "SH-183 (Airport Freeway), SH-121, SH-360, and SH-10 (Euless Boulevard)",
		"about": [
			"Euless reaches into DFW International Airport: the airport's southwestern portion lies inside city limits. Airline caterer LSG Sky Chefs is one of the city's largest employers, after Hurst-Euless-Bedford ISD. Glade Parks, a mixed-use district on SH-121 close to the airport, adds a large retail center with an Aloft hotel beside it.",
			"Airport work runs around the clock, and restaurant and retail jobs run late. Break rooms that serve airline, hotel, and restaurant crews need food at all hours, so micro markets that stay open around the clock fit well here. Service visits are planned around shifts and badge rules."
		],
		"businessAreas": [
			{
				"name": "DFW International Airport (southwest side)",
				"note": "part of the airport lies inside Euless city limits"
			},
			{
				"name": "Glade Parks",
				"note": "mixed-use district on SH-121 with Glade Parks Town Center retail and an Aloft hotel"
			},
			{
				"name": "SH-183 and SH-360 interchange",
				"note": "where Airport Freeway meets SH-360, the route to Arlington and Grapevine"
			},
			{
				"name": "Euless Boulevard (SH-10)",
				"note": "older main road that ends at SH-183 just west of SH-360"
			},
			{
				"name": "North Industrial Boulevard",
				"note": "commercial sites and an H-E-B grocery store"
			}
		],
		"focus": [
			"transportation",
			"hospitality",
			"education"
		],
		"nearby": [
			"bedford",
			"hurst",
			"irving",
			"arlington",
			"coppell"
		],
		"photos": [
			"lobby-smart-vending.jpg",
			"drink-coolers-kiosk.jpeg",
			"smart-cooler-phone.jpg",
			"phone-pay-vending.jpg",
			"warehouse-worker-break.avif",
			"micro-market-stations.jpg"
		],
		"faq": {
			"question": "Our team near DFW Airport works under badge rules. Can you still service our break room?",
			"answer": "Yes. We plan service visits around your shifts, docks, and badge rules, and local technicians respond to reported issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Euless,_Texas",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_183",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_10",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_121",
			"https://www.jll.com/en-us/newsroom/dallas-area-power-and-lifestyle-center-sells",
			"https://www.crexi.com/properties/904879/texas-glade-parks-multi-tenant-building",
			"https://www.crexi.com/properties/2558505/texas-545-ac-frontage-on-industrial-boulevard---euless-tx"
		]
	},
	{
		"slug": "desoto",
		"name": "DeSoto",
		"region": "South Dallas and Ellis County",
		"county": "Dallas and Ellis Counties",
		"highways": "I-35E, I-20, I-45, and US-67",
		"about": [
			"This area covers southern Dallas County and northern Ellis County: DeSoto, Lancaster, Duncanville, Red Oak, and Ferris. DeSoto has about four miles of I-35E frontage. Its Eagle Business & Industrial Park, reached from Centre Park Boulevard and Polk Street, holds Solar Turbines (a Caterpillar company), Williams-Sonoma Direct, Kohl's e-commerce fulfillment center, and Sam's/Walmart distribution. Next door, Lancaster's Park 20/35 at I-20 and I-35E serves tenants such as Quaker Oats/PepsiCo, Mars Petcare, and BMW. Farther south on I-35E, Red Oak has become a data center town: Compass Datacenters and Google have both bought large sites there.",
			"The work here is mostly warehouse, fulfillment, and plant shifts, plus data center staff in Red Oak. Large buildings need food close to each break area and steady restocking during peak season. Duncanville, on I-20 and US-67, and Ferris, on I-45, round out the area with school districts and city services."
		],
		"businessAreas": [
			{
				"name": "Eagle Business & Industrial Park (DeSoto)",
				"note": "industrial park along I-35E with Solar Turbines, Williams-Sonoma Direct, and Kohl's e-commerce fulfillment"
			},
			{
				"name": "Park 20/35 (Lancaster)",
				"note": "the largest logistics park in Lancaster, at I-20 and I-35E, with Quaker Oats/PepsiCo and Mars Petcare"
			},
			{
				"name": "Red Oak data center campuses",
				"note": "Compass Datacenters' campus and Google's site off Ovilla Road"
			},
			{
				"name": "Lancaster Regional Airport",
				"note": "city-owned general aviation airport and reliever for DFW and Love Field"
			},
			{
				"name": "Duncanville Main Street and the Fieldhouse",
				"note": "downtown business district and a large indoor basketball and volleyball facility"
			}
		],
		"focus": [
			"warehouses",
			"logistics",
			"manufacturing",
			"datacenter"
		],
		"nearby": [
			"dallas",
			"waxahachie",
			"kaufman",
			"arlington"
		],
		"towns": [
			{
				"name": "DeSoto",
				"county": "Dallas County",
				"note": "has about four miles of I-35E frontage and sits less than a mile south of I-20"
			},
			{
				"name": "Lancaster",
				"county": "Dallas County",
				"note": "I-35E forms its western boundary, and Park 20/35 is its largest logistics park"
			},
			{
				"name": "Duncanville",
				"county": "Dallas County",
				"note": "I-20 crosses its northern portion and US-67 its eastern portion"
			},
			{
				"name": "Red Oak",
				"county": "Ellis County",
				"note": "an I-35E town where Compass Datacenters and Google have bought land for data center campuses"
			},
			{
				"name": "Ferris",
				"county": "Ellis County (a small part is in Dallas County)",
				"note": "an I-45 town once known as the Brick Capital of the Nation"
			}
		],
		"photos": [
			"warehouse-cafeteria.avif",
			"worker-cashless-cooler.webp",
			"distribution-breakroom.jpeg",
			"warehouse-worker-break.avif",
			"vending-row.jpeg",
			"smart-cooler-fresh-food.jpeg"
		],
		"faq": {
			"question": "Which southern Dallas County and Ellis County cities does this page cover?",
			"answer": "DeSoto, Lancaster, Duncanville, Red Oak, and Ferris. We plan service visits around shifts, docks, and badge rules, and local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/DeSoto,_Texas",
			"https://en.wikipedia.org/wiki/Lancaster,_Texas",
			"https://en.wikipedia.org/wiki/Duncanville,_Texas",
			"https://en.wikipedia.org/wiki/Red_Oak,_Texas",
			"https://en.wikipedia.org/wiki/Ferris,_Texas",
			"https://bestsouthwest.org/partners/city-of-desoto/",
			"https://online.flippingbook.com/view/699413454/24/",
			"https://siteselection.com/texas-edc-investor-profile-red-oak-the-small-city-thats-making-a-big-name-for-itself/",
			"https://www.compassdatacenters.com/press-releases/compass-datacenters-adds-second-dallas-area-campus/",
			"https://holtlunsford.com/hlc-properties/industrial/park-2035/"
		]
	},
	{
		"slug": "hurst",
		"name": "Hurst",
		"region": "Fort Worth and Tarrant County",
		"county": "Tarrant County",
		"highways": "SH-183 and SH-121 (Airport Freeway), SH-10 (Hurst Boulevard), SH-26, and I-820 at the city's west side",
		"about": [
			"Hurst grew up around Bell's helicopter plant; Bell's helicopter division moved to Hurst in 1951. Bell Textron still tops the city's 2021 list of principal employers, though Bell's headquarters is counted as inside Fort Worth city limits. North East Mall, at the junction of SH-183, SH-121, and I-820, and Tarrant County College's Northeast Campus are the city's other large draws.",
			"That makes Hurst a mix of plant shifts, retail staff, and students. Mall stores and the college see steady visitor traffic, which counts toward the 50-person minimum for free placement. Every machine takes cards, mobile wallets, and tap-to-pay, which suits students and shoppers who carry no cash."
		],
		"businessAreas": [
			{
				"name": "North East Mall",
				"note": "regional mall at the SH-183, SH-121, and I-820 junction with department stores and a cinema"
			},
			{
				"name": "Tarrant County College Northeast Campus",
				"note": "community college campus inside Hurst"
			},
			{
				"name": "Hurst Conference Center",
				"note": "city-owned meeting center on Campus Drive with a hotel next door"
			},
			{
				"name": "Bell Textron",
				"note": "helicopter maker whose plant drove the city's growth and remains its largest listed employer"
			},
			{
				"name": "Hurst/Bell Station",
				"note": "Trinity Railway Express commuter rail stop"
			}
		],
		"focus": [
			"manufacturing",
			"hospitality",
			"education"
		],
		"nearby": [
			"bedford",
			"euless",
			"keller",
			"fort-worth",
			"arlington"
		],
		"photos": [
			"smart-cooler-kiosk.jpeg",
			"micro-market-breakroom.jpeg",
			"stocking-fresh-food.jpg",
			"team-lunch.jpg",
			"smart-cooler-unlock.jpg",
			"full-line-vending.jpeg"
		],
		"faq": {
			"question": "Our break room in Hurst already has machines from another vendor. Can you work on those?",
			"answer": "Yes. We repair and move machines from any supplier, and our local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Hurst,_Texas",
			"https://en.wikipedia.org/wiki/Bell_Textron",
			"https://en.wikipedia.org/wiki/North_East_Mall",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_10",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_183",
			"https://en.wikipedia.org/wiki/Texas_State_Highway_26",
			"https://architizer.com/projects/hurst-conference-center/",
			"https://citybudgets.tarrantcounty.com/flipbook/CityBudgets/2019/Hurst/files/basic-html/page30.html"
		]
	},
	{
		"slug": "royse-city",
		"name": "Royse City",
		"region": "East of Dallas",
		"county": "Rockwall, Collin, and Hunt Counties",
		"highways": "I-30 and SH-66",
		"about": [
			"Royse City is mostly in Rockwall County and extends into Collin and Hunt Counties. I-30 runs along its south side, and SH-66 runs through town. Small manufacturers work out of the city's industrial park on Industrial Drive, including Dust Free (air filtration), J&M Plastics, United Diecasting, and Texas Medical Industries. The I-30 frontage has Buc-ee's and Walmart, and downtown has been a Texas Main Street City since 2007.",
			"Most local employers are small and mid-sized: machine shops, plastics and diecasting plants, Royse City ISD campuses, and highway retail. A few full-line machines or a compact smart cooler fit those break rooms. Cashless readers and restocking based on sales keep them running without someone on site to manage them."
		],
		"businessAreas": [
			{
				"name": "Royse City Industrial Park (Industrial Drive)",
				"note": "small manufacturers including Dust Free, J&M Plastics, and United Diecasting"
			},
			{
				"name": "I-30 frontage",
				"note": "highway retail including Buc-ee's and Walmart"
			},
			{
				"name": "Downtown Royse City",
				"note": "historic district run under the Texas Main Street program since 2007"
			},
			{
				"name": "Royse City ISD",
				"note": "the city's school district and one of its main employers"
			}
		],
		"focus": [
			"manufacturing",
			"logistics",
			"education"
		],
		"nearby": [
			"rowlett",
			"forney",
			"wylie",
			"kaufman"
		],
		"photos": [
			"workers-lunch.avif",
			"plant-manager-vending.png",
			"drink-coolers-snacks.webp",
			"worker-cashless-cooler.webp",
			"smart-cooler-phone.jpg",
			"distribution-breakroom.jpeg"
		],
		"faq": {
			"question": "Our Royse City shop has about 30 employees plus regular customer traffic. Do we qualify for free placement?",
			"answer": "Placement is free when total foot traffic, counting employees and visitors, reaches at least 50 people. There is no long-term contract."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Royse_City,_Texas",
			"https://www.roysecitycdc.org/workforce/major-employers/",
			"https://www.roysecitycdc.org/news-center/p/item/38029/manufacturing-month-a-great-time-to-celebrate-the-industry-in-royse-city",
			"https://www.roysecitycdc.org/about/partners/p/item/15248/royse-city-main-street"
		]
	},
	{
		"slug": "waxahachie",
		"name": "Waxahachie",
		"region": "South Dallas and Ellis County",
		"county": "Ellis County (county seat)",
		"highways": "I-35E, US-287, and US-77",
		"about": [
			"Waxahachie is the Ellis County seat. I-35E passes the west side of town, US-287 crosses the north side, and US-77 runs through downtown. A cluster of plants sits within a few miles of each other: Owens Corning, James Hardie, Cardinal Glass, Magnablend, Dart Container, Georgia-Pacific, International Paper, and Berry Global. Walgreens runs a large distribution center here. Baylor Scott & White Medical Center – Waxahachie is on I-35E.",
			"Plant and warehouse crews here work round-the-clock shifts, and hospital staff do the same on I-35E. Full-line machines, smart coolers, and micro markets with fresh food fit those schedules. Real-time monitoring keeps restocking ahead of demand. Downtown, county offices, Navarro College's Waxahachie campus, and Nelson University add office and campus break rooms."
		],
		"businessAreas": [
			{
				"name": "Waxahachie industrial cluster",
				"note": "plants including Owens Corning, James Hardie, Cardinal Glass, Magnablend, and Dart Container"
			},
			{
				"name": "Walgreens distribution center",
				"note": "a large automated warehouse with conveyors and multi-level picking modules"
			},
			{
				"name": "Baylor Scott & White Medical Center – Waxahachie",
				"note": "hospital on North I-35E"
			},
			{
				"name": "Downtown Waxahachie",
				"note": "courthouse square and county offices around Rogers and West Franklin Streets"
			},
			{
				"name": "US-77 corridor",
				"note": "the main road through town, lined with commercial development"
			}
		],
		"focus": [
			"manufacturing",
			"warehouses",
			"hospitals",
			"education"
		],
		"nearby": [
			"desoto",
			"kaufman",
			"dallas"
		],
		"photos": [
			"employee-cafeteria.png",
			"workers-breakroom-vending.jpeg",
			"texas-vending-coolers.png",
			"workers-lunch.avif",
			"multi-door-cooler.jpeg",
			"technician-vending.jpg"
		],
		"faq": {
			"question": "Can you take over service for the vending machines already in our Waxahachie plant?",
			"answer": "Yes. We repair and move machines from any supplier, and local technicians respond to reported service issues within 24 hours, including after hours."
		},
		"sources": [
			"https://en.wikipedia.org/wiki/Waxahachie,_Texas",
			"https://www.korteco.com/construction-projects/walgreens-distribution-center-waxahachie/",
			"https://ahd.com/free_profile/450372/Baylor_Scott___White_Medical_Center_-_Waxahachie/Waxahachie/Texas"
		]
	}
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
