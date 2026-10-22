import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

const WORDS_PER_MINUTE = 225;

/** Published posts (draft: false), newest first. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Estimated reading time in whole minutes (minimum 1), from the raw Markdown/MDX body. */
export function readingTime(body = ''): number {
	const text = body
		.replace(/```[\s\S]*?```/g, ' ') // code blocks
		.replace(/^\s*(import|export)\s.*$/gm, ' ') // MDX imports/exports
		.replace(/<[^>]+>/g, ' ') // HTML/JSX tags
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links and images keep their text
		.replace(/[#>*_`~|-]/g, ' ');
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/** Posts that share the most tags with `post`, topped up with the newest posts. */
export function relatedPosts(post: BlogPost, posts: BlogPost[], limit = 3): BlogPost[] {
	const tags = new Set(post.data.tags);
	return posts
		.filter((other) => other.id !== post.id)
		.map((other, index) => ({
			other,
			index,
			shared: other.data.tags.filter((tag) => tags.has(tag)).length,
		}))
		.sort((a, b) => b.shared - a.shared || a.index - b.index)
		.slice(0, limit)
		.map(({ other }) => other);
}

export const formatDate = (date: Date) =>
	date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
