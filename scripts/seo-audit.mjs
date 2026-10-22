// SEO audit for the built site. Run after `npm run build`:  node scripts/seo-audit.mjs
// Checks every HTML page in dist/ and exits with code 1 if any check fails.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const SITE = 'https://texasvending.com';

const files = [];
(function walk(dir) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) walk(path);
		else if (name.endsWith('.html')) files.push(path);
	}
})(DIST);

const urlFor = (file) => {
	const rel = relative(DIST, file).split(sep).join('/');
	if (rel === '404.html') return '/404';
	return '/' + rel.replace(/index\.html$/, '');
};
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const text = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

const issues = [];
const warn = [];
const fail = (page, msg) => issues.push(`${page}: ${msg}`);
const titles = new Map();
const descriptions = new Map();
const pages = [];
const BAD_ANCHORS = /^(click here|here|read more|more|learn more|this|link)$/i;

for (const file of files) {
	const html = readFileSync(file, 'utf8');
	const url = urlFor(file);
	const isRedirect = /http-equiv="refresh"/i.test(html);
	const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '';
	const noindex = /noindex/i.test(robots) || isRedirect;
	pages.push({ url, noindex, isRedirect });
	if (isRedirect) {
		if (!/noindex/i.test(robots)) warn.push(`${url}: redirect page has no robots noindex (meta refresh)`);
		continue;
	}

	// 1. Unique title and description
	const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
	const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
	if (!title) fail(url, 'missing <title>');
	if (!desc) fail(url, 'missing meta description');
	if (title.length > 60) warn.push(`${url}: title is ${title.length} chars (over 60): "${title}"`);
	if (desc.length > 160) fail(url, `description is ${desc.length} chars (over 160)`);
	if (desc && desc.length < 70) warn.push(`${url}: description is short (${desc.length} chars)`);
	if (!noindex) {
		titles.set(title, [...(titles.get(title) ?? []), url]);
		descriptions.set(desc, [...(descriptions.get(desc) ?? []), url]);
	}

	// 2 + 3. One H1, no skipped heading levels
	const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ level: +m[1], text: text(m[2]) }));
	const h1s = headings.filter((h) => h.level === 1);
	if (h1s.length !== 1) fail(url, `${h1s.length} <h1> tags`);
	if (headings[0] && headings[0].level !== 1) fail(url, `first heading is h${headings[0].level}, not h1`);
	headings.forEach((h, i) => {
		if (i && h.level > headings[i - 1].level + 1)
			fail(url, `heading skips a level: h${headings[i - 1].level} "${headings[i - 1].text}" then h${h.level} "${h.text}"`);
		if (!h.text) fail(url, `empty h${h.level}`);
	});

	// 4. Internal links: relative paths, descriptive text
	for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
		const tag = m[0].slice(0, m[0].indexOf('>') + 1);
		const href = attr(tag, 'href');
		if (href === undefined || href === '' || href === '#') {
			fail(url, `link with empty href ("${text(m[2])}")`);
			continue;
		}
		if (href.startsWith(SITE)) fail(url, `absolute internal link ${href} (use a relative path)`);
		const label = attr(tag, 'aria-label') || text(m[2]) || attr(m[2].match(/<img[^>]*>/)?.[0] ?? '', 'alt') || '';
		const hidden = attr(tag, 'aria-hidden') === 'true';
		if (!hidden && !label) fail(url, `link to ${href} has no accessible text`);
		if (BAD_ANCHORS.test(label.trim())) fail(url, `vague anchor text "${label}" -> ${href}`);
	}

	// 5. Image alt text
	for (const m of html.matchAll(/<img\b[^>]*>/g)) {
		const alt = attr(m[0], 'alt');
		if (!alt || !alt.trim()) fail(url, `image without alt: ${attr(m[0], 'src')}`);
	}

	// 6. Canonical present and matches the page URL
	const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
	if (!canonical) fail(url, 'missing canonical');
	else if (url !== '/404' && canonical !== SITE + url) fail(url, `canonical ${canonical} does not match ${SITE + url}`);
	const ogUrl = html.match(/<meta property="og:url" content="([^"]*)"/)?.[1];
	if (ogUrl && canonical && ogUrl !== canonical) fail(url, 'og:url differs from canonical');

	// Social image must exist
	const ogImage = html.match(/<meta property="og:image" content="([^"]*)"/)?.[1];
	if (!ogImage) fail(url, 'missing og:image');
	else if (ogImage.startsWith(SITE) && !existsSync(join(DIST, decodeURI(ogImage.slice(SITE.length)))))
		fail(url, `og:image file not found: ${ogImage}`);

	// 9. JSON-LD parses and has required fields
	for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
		let data;
		try {
			data = [].concat(JSON.parse(m[1]));
		} catch (e) {
			fail(url, `invalid JSON-LD: ${e.message}`);
			continue;
		}
		for (const node of data) {
			if (node['@context'] !== 'https://schema.org') fail(url, `${node['@type']} missing @context`);
			const need = {
				LocalBusiness: ['name', 'address', 'telephone', 'url', 'image'],
				WebPage: ['name', 'url'],
				BlogPosting: ['headline', 'image', 'datePublished', 'author', 'publisher'],
				FAQPage: ['mainEntity'],
			}[node['@type']] ?? [];
			for (const key of need) if (!node[key]) fail(url, `${node['@type']} missing "${key}"`);
			if (node['@type'] === 'WebPage' && node.url !== canonical) fail(url, 'WebPage url differs from canonical');
		}
	}
	if (!noindex && !/application\/ld\+json/.test(html)) fail(url, 'no JSON-LD');

	// 10. Collect internal links for the broken-link pass
	pages.at(-1).links = [...html.matchAll(/<a\b[^>]*\shref="(\/[^"#?]*)/g)].map((m) => m[1]);
}

// 1. Duplicates
for (const [t, urls] of titles) if (urls.length > 1) fail(urls.join(', '), `duplicate title "${t}"`);
for (const [d, urls] of descriptions) if (urls.length > 1) fail(urls.join(', '), `duplicate description "${d}"`);

// 10. Broken internal links
const isFile = (path) => existsSync(path) && statSync(path).isFile();
const exists = (path) =>
	isFile(join(DIST, path, 'index.html')) || isFile(join(DIST, path)) || isFile(join(DIST, `${path}.html`));
const broken = new Map();
for (const page of pages)
	for (const link of page.links ?? []) if (!exists(decodeURI(link))) broken.set(link, [...new Set([...(broken.get(link) ?? []), page.url])]);
for (const [link, from] of broken) fail(`broken link ${link}`, `linked from ${from.join(', ')}`);

// 7. Sitemap
const sitemapUrls = existsSync(join(DIST, 'sitemap-0.xml'))
	? [...readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8').matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].slice(SITE.length))
	: [];
if (!sitemapUrls.length) fail('sitemap', 'sitemap-0.xml missing or empty');
for (const page of pages) {
	const listed = sitemapUrls.includes(page.url);
	if (!page.noindex && !listed) fail('sitemap', `indexable page missing: ${page.url}`);
	if (page.noindex && listed) fail('sitemap', `noindex/redirect page listed: ${page.url}`);
}
for (const u of sitemapUrls) if (/thank-you|404/.test(u)) fail('sitemap', `should be excluded: ${u}`);

// 8. robots.txt
const robotsTxt = existsSync(join(DIST, 'robots.txt')) ? readFileSync(join(DIST, 'robots.txt'), 'utf8') : '';
if (!robotsTxt) fail('robots.txt', 'missing');
if (!robotsTxt.includes(`Sitemap: ${SITE}/sitemap-index.xml`)) fail('robots.txt', 'sitemap not referenced');
if (/^Disallow:\s*\/\s*$/m.test(robotsTxt)) fail('robots.txt', 'blocks the whole site');

console.log(`Pages checked: ${pages.length} (${pages.filter((p) => !p.noindex).length} indexable)`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
if (warn.length) console.log(`\nWarnings (${warn.length}):\n- ` + warn.join('\n- '));
if (issues.length) {
	console.log(`\nFailures (${issues.length}):\n- ` + issues.join('\n- '));
	process.exitCode = 1;
} else console.log('\nAll checks passed.');
