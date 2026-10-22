import { ADDRESS, PHONE_TEL, SITE_NAME, SITE_URL } from '../consts';

const CONTEXT = 'https://schema.org';
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;
const isoDate = (date: Date | string) => new Date(date).toISOString();

interface OrganizationRef {
	'@type': 'Organization';
	'@id': string;
	name: string;
	url: string;
}

// Full name and url, not just @id: Google does not resolve @id across pages
const businessRef: OrganizationRef = {
	'@type': 'Organization',
	'@id': BUSINESS_ID,
	name: SITE_NAME,
	url: `${SITE_URL}/`,
};

export interface LocalBusinessSchema {
	'@context': typeof CONTEXT;
	'@type': 'LocalBusiness';
	'@id': string;
	name: string;
	url: string;
	telephone: string;
	address: {
		'@type': 'PostalAddress';
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
	};
	areaServed: { '@type': 'Place'; name: string };
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification';
		dayOfWeek: string[];
		opens: string;
		closes: string;
	};
	image?: string;
}

export interface WebPageSchema {
	'@context': typeof CONTEXT;
	'@type': 'WebPage';
	'@id': string;
	name: string;
	url: string;
	description?: string;
	isPartOf: { '@type': 'WebSite'; '@id': string; name: string; url: string };
	publisher: OrganizationRef;
}

export interface BlogPostingSchema {
	'@context': typeof CONTEXT;
	'@type': 'BlogPosting';
	headline: string;
	description?: string;
	url?: string;
	mainEntityOfPage?: string;
	author: { '@type': 'Person'; name: string; url?: string } | OrganizationRef;
	publisher: OrganizationRef;
	datePublished: string;
	dateModified: string;
	image: string;
}

export interface FAQPageSchema {
	'@context': typeof CONTEXT;
	'@type': 'FAQPage';
	mainEntity: {
		'@type': 'Question';
		name: string;
		acceptedAnswer: { '@type': 'Answer'; text: string };
	}[];
}

/** Texas Vending business details. Pass `image` once a logo or storefront photo exists. */
export function localBusinessSchema(options: { image?: string } = {}): LocalBusinessSchema {
	return {
		'@context': CONTEXT,
		'@type': 'LocalBusiness',
		'@id': BUSINESS_ID,
		name: SITE_NAME,
		url: `${SITE_URL}/`,
		telephone: PHONE_TEL,
		address: {
			'@type': 'PostalAddress',
			streetAddress: ADDRESS.street,
			addressLocality: ADDRESS.city,
			addressRegion: ADDRESS.region,
			postalCode: ADDRESS.postalCode,
			addressCountry: 'US',
		},
		areaServed: { '@type': 'Place', name: 'Dallas–Fort Worth, Texas' },
		// Open 24/7
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '00:00',
			closes: '23:59',
		},
		...(options.image && { image: absoluteUrl(options.image) }),
	};
}

export function webPageSchema(page: { name: string; url: string; description?: string }): WebPageSchema {
	const url = absoluteUrl(page.url);
	return {
		'@context': CONTEXT,
		'@type': 'WebPage',
		'@id': `${url}#webpage`,
		name: page.name,
		url,
		...(page.description && { description: page.description }),
		isPartOf: { '@type': 'WebSite', '@id': WEBSITE_ID, name: SITE_NAME, url: `${SITE_URL}/` },
		publisher: businessRef,
	};
}

/** Omit `author` to credit the business itself. `image` is required by Google for BlogPosting rich results. */
export function blogPostingSchema(post: {
	headline: string;
	datePublished: Date | string;
	dateModified?: Date | string;
	image: string;
	author?: { name: string; url?: string };
	description?: string;
	url?: string;
}): BlogPostingSchema {
	const url = post.url && absoluteUrl(post.url);
	return {
		'@context': CONTEXT,
		'@type': 'BlogPosting',
		headline: post.headline,
		...(post.description && { description: post.description }),
		...(url && { url, mainEntityOfPage: url }),
		author: post.author ? { '@type': 'Person', ...post.author } : businessRef,
		publisher: businessRef,
		datePublished: isoDate(post.datePublished),
		dateModified: isoDate(post.dateModified ?? post.datePublished),
		image: absoluteUrl(post.image),
	};
}

export interface ServiceSchema {
	'@context': typeof CONTEXT;
	'@type': 'Service';
	name: string;
	serviceType: string;
	description: string;
	url: string;
	image?: string;
	provider: OrganizationRef;
	areaServed: { '@type': 'Place'; name: string };
}

export interface BreadcrumbListSchema {
	'@context': typeof CONTEXT;
	'@type': 'BreadcrumbList';
	itemListElement: { '@type': 'ListItem'; position: number; name: string; item: string }[];
}

export function serviceSchema(service: {
	name: string;
	serviceType: string;
	description: string;
	url: string;
	image?: string;
}): ServiceSchema {
	return {
		'@context': CONTEXT,
		'@type': 'Service',
		name: service.name,
		serviceType: service.serviceType,
		description: service.description,
		url: absoluteUrl(service.url),
		...(service.image && { image: absoluteUrl(service.image) }),
		provider: businessRef,
		areaServed: { '@type': 'Place', name: 'Dallas–Fort Worth, Texas' },
	};
}

/** Crumbs in order, starting with Home. Each `url` is a site path. */
export function breadcrumbSchema(crumbs: { name: string; url: string }[]): BreadcrumbListSchema {
	return {
		'@context': CONTEXT,
		'@type': 'BreadcrumbList',
		itemListElement: crumbs.map((crumb, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: crumb.name,
			item: absoluteUrl(crumb.url),
		})),
	};
}

export function faqPageSchema(faqs: { question: string; answer: string }[]): FAQPageSchema {
	return {
		'@context': CONTEXT,
		'@type': 'FAQPage',
		mainEntity: faqs.map(({ question, answer }) => ({
			'@type': 'Question',
			name: question,
			acceptedAnswer: { '@type': 'Answer', text: answer },
		})),
	};
}
