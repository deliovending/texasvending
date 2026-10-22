// Inlines above-the-fold CSS into each built page and loads the full stylesheet without blocking render.
//
// "Above the fold" = the site header plus the first element inside <main> (the hero on every page).
// Beasties keeps only the CSS rules that match those elements, writes them into a <style> tag in
// <head>, and switches the stylesheet <link> to load asynchronously (with a <noscript> fallback).
// Running at build time keeps the inlined CSS in sync with the components automatically.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Beasties from 'beasties';

async function* htmlFiles(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) yield* htmlFiles(path);
		else if (entry.name.endsWith('.html')) yield path;
	}
}

/** Index just past the closing tag of the first element inside <main>, or -1. */
function endOfFirstMainChild(html) {
	const mainOpen = html.search(/<main\b[^>]*>/);
	if (mainOpen === -1) return -1;
	const firstTag = /<([a-z][a-z0-9-]*)\b[^>]*>/gi;
	firstTag.lastIndex = html.indexOf('>', mainOpen) + 1;
	const first = firstTag.exec(html);
	if (!first) return -1;

	// Walk same-name open/close tags until the first element is balanced
	const name = first[1].toLowerCase();
	const tags = new RegExp(`<(/?)${name}\\b[^>]*>`, 'gi');
	tags.lastIndex = first.index + first[0].length;
	let depth = 1;
	for (let match; (match = tags.exec(html)); ) {
		depth += match[1] ? -1 : 1;
		if (depth === 0) return match.index + match[0].length;
	}
	return -1;
}

export default function criticalCss() {
	return {
		name: 'critical-css',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const distDir = fileURLToPath(dir);
				const beasties = new Beasties({
					path: distDir,
					publicPath: '/',
					preload: 'media', // <link media="print" onload="this.media='all'">
					noscriptFallback: true,
					pruneSource: false, // keep the full stylesheet for the rest of the page
					reduceInlineStyles: false, // leave the @font-face <style> from <Font> as is
					inlineFonts: false,
					preloadFonts: false,
					logLevel: 'warn',
				});

				let count = 0;
				for await (const file of htmlFiles(distDir)) {
					const html = await readFile(file, 'utf8');
					const cut = endOfFirstMainChild(html);
					if (cut === -1 || !/<link rel="stylesheet"/.test(html)) continue;

					// Process only the above-the-fold markup, then reuse its rewritten <head> on the full page
					const aboveFold = `${html.slice(0, cut)}</main></body></html>`;
					const processed = await beasties.process(aboveFold);
					const newHead = processed.match(/<head>[\s\S]*<\/head>/)?.[0];
					if (!newHead) continue;

					await writeFile(file, html.replace(/<head>[\s\S]*<\/head>/, () => newHead));
					count++;
				}
				logger.info(`Inlined above-the-fold CSS in ${count} pages`);
			},
		},
	};
}
