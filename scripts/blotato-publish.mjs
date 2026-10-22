// Sends approved social captions in social/posts.json to Blotato (https://help.blotato.com).
// Dry run by default: prints each payload and sends nothing.
//   BLOTATO_API_KEY=... node scripts/blotato-publish.mjs            dry run
//   BLOTATO_API_KEY=... node scripts/blotato-publish.mjs --publish  upload media and schedule posts
// Optional env: FEED_URL (default https://texasvending.com/rss.xml), BLOTATO_FACEBOOK_PAGE and
// BLOTATO_LINKEDIN_PAGE (page names, needed only when the account manages more than one page).
import { readFileSync } from 'node:fs';

const API = 'https://backend.blotato.com/v2';
const FEED_URL = process.env.FEED_URL ?? 'https://texasvending.com/rss.xml';
const API_KEY = process.env.BLOTATO_API_KEY;
const PUBLISH = process.argv.includes('--publish');
const PLATFORMS = ['instagram', 'facebook', 'linkedin'];
// Leftover template text that must never reach a live post
const PLACEHOLDER = /\{\{|\}\}|\bTODO\b|\bTBD\b|lorem ipsum|\[(insert|link|url|name)[^\]]*\]|example\.com/i;
const INSTAGRAM_MAX_CHARS = 2200;
const INSTAGRAM_MAX_HASHTAGS = 30;

if (!API_KEY) {
	console.error('Set BLOTATO_API_KEY first.');
	process.exit(1);
}

const api = async (path, options = {}) => {
	const res = await fetch(`${API}${path}`, {
		...options,
		headers: { 'blotato-api-key': API_KEY, 'Content-Type': 'application/json', ...options.headers },
	});
	const body = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(`${options.method ?? 'GET'} ${path} -> ${res.status} ${body.message ?? ''}`);
	return body;
};

// Feed items by slug, with the live post URL and its media:content image
const feed = await (await fetch(FEED_URL)).text();
const feedItems = new Map(
	[...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
		const link = item.match(/<link>([^<]+)<\/link>/)?.[1];
		const image = item.match(/<media:content url="([^"]+)"/)?.[1];
		return [link?.match(/\/blog\/([^/]+)\/?$/)?.[1], { link, image }];
	}),
);

// One Blotato account per platform; Facebook needs a page id, LinkedIn may post as a company page
const { items: accounts } = await api('/users/me/accounts');
const pickOne = (items, name, label) => {
	const match = name ? items.filter((item) => item.name === name) : items;
	if (match.length !== 1) throw new Error(`${label}: expected one match, found ${match.length}. Set the page name env var.`);
	return match[0];
};
const targets = {};
for (const platform of PLATFORMS) {
	const account = accounts.find((a) => a.platform === platform);
	if (!account) continue;
	const target = { accountId: account.id, target: { targetType: platform } };
	if (platform === 'facebook') {
		const { items } = await api(`/users/me/accounts/${account.id}/subaccounts`);
		target.target.pageId = pickOne(items, process.env.BLOTATO_FACEBOOK_PAGE, 'Facebook page').id;
	}
	if (platform === 'linkedin' && process.env.BLOTATO_LINKEDIN_PAGE) {
		const { items } = await api(`/integrations/oauth2/linkedin/pages?accountId=${account.id}`);
		target.target.pageId = pickOne(items, process.env.BLOTATO_LINKEDIN_PAGE, 'LinkedIn page').id;
	}
	targets[platform] = target;
}

const { posts } = JSON.parse(readFileSync('social/posts.json', 'utf8'));
const problems = [];
const queue = [];

for (const post of posts) {
	const live = feedItems.get(post.slug);
	for (const variant of post.variants.filter((v) => v.approved)) {
		const fail = (msg) => problems.push(`${variant.id}: ${msg}`);
		if (!live) {
			fail(`blog post "${post.slug}" is not in ${FEED_URL} yet`);
			continue;
		}
		if (!targets[variant.platform]) fail(`no connected ${variant.platform} account in Blotato`);
		if (PLACEHOLDER.test(variant.text)) fail('caption contains placeholder text');
		if (variant.platform !== 'instagram' && !variant.text.includes(live.link)) fail(`caption must link to ${live.link}`);
		if (variant.platform === 'instagram') {
			if (variant.text.length > INSTAGRAM_MAX_CHARS) fail(`caption is over ${INSTAGRAM_MAX_CHARS} characters`);
			if ((variant.text.match(/#\w+/g) ?? []).length > INSTAGRAM_MAX_HASHTAGS) fail('too many hashtags');
		}
		if (variant.scheduledTime && new Date(variant.scheduledTime) <= new Date()) fail(`scheduledTime ${variant.scheduledTime} is in the past`);

		const image = variant.mediaUrl ?? live.image;
		const imageRes = image && (await fetch(image, { method: 'HEAD' }));
		if (!imageRes?.ok) fail(`image ${image ?? '(none)'} does not load`);
		queue.push({ variant, image, link: live.link });
	}
}

if (problems.length) {
	console.error(`Nothing sent. Fix these first:\n- ${problems.join('\n- ')}`);
	process.exit(1);
}
if (!queue.length) {
	console.log('No approved variants. Set "approved": true in social/posts.json after review.');
	process.exit(0);
}

for (const { variant, image, link } of queue) {
	const { accountId, target } = targets[variant.platform];
	const mediaUrl = PUBLISH ? (await api('/media', { method: 'POST', body: JSON.stringify({ url: image }) })).url : image;
	const body = {
		post: {
			accountId,
			content: { text: variant.text, mediaUrls: [mediaUrl], platform: variant.platform },
			target: {
				...target,
				...(variant.platform === 'facebook' && { link }),
				...(variant.platform === 'instagram' && variant.altText && { altText: variant.altText }),
			},
		},
		...(variant.scheduledTime ? { scheduledTime: variant.scheduledTime } : { useNextFreeSlot: true }),
	};
	if (!PUBLISH) {
		console.log(`[dry run] ${variant.id}\n${JSON.stringify(body, null, 2)}\n`);
		continue;
	}
	const { postSubmissionId } = await api('/posts', { method: 'POST', body: JSON.stringify(body) });
	console.log(`${variant.id}: submitted (${postSubmissionId}), scheduled ${variant.scheduledTime ?? 'next free slot'}`);
}
