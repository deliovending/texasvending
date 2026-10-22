import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getImage } from 'astro:assets';
import { SITE_NAME } from '../consts';
import { getPublishedPosts } from '../lib/blog';

// Blog feed. Social automation reads the title, link, description, and media:content image of each item.
export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();
	const site = context.site!;

	const items = await Promise.all(
		posts.map(async (post) => {
			const { title, description, pubDate, image, imageAlt, tags } = post.data;
			const socialImage = await getImage({ src: image, width: 1200, format: 'jpg' });
			const imageUrl = new URL(socialImage.src, site).href;
			return {
				title,
				description,
				pubDate,
				link: `/blog/${post.id}/`,
				categories: tags,
				customData: `<media:content url="${imageUrl}" medium="image" type="image/jpeg"><media:description>${escapeXml(imageAlt)}</media:description></media:content>`,
			};
		}),
	);

	return rss({
		title: `${SITE_NAME} Blog`,
		description: 'Break room, vending, micro market, and smart cooler guides for businesses across Dallas–Fort Worth.',
		site,
		items,
		xmlns: { media: 'http://search.yahoo.com/mrss/' },
		customData: '<language>en-us</language>',
		trailingSlash: true,
	});
}

const escapeXml = (text: string) =>
	text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
