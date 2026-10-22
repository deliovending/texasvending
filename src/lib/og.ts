import { getImage } from 'astro:assets';
import heroImage from '../assets/images/office-lounge-vending.png';

/** Default social share image: the homepage hero photo cropped to 1200×630 (the Open Graph size). */
export async function getDefaultOgImage(): Promise<string> {
	const image = await getImage({ src: heroImage, width: 1200, height: 630, fit: 'cover', format: 'jpg' });
	return image.src;
}
