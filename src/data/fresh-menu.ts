// Fresh Meals Catalog on /fresh-food/. Items come from the owner's current menu list (2026-11-03), five per menu.
// Names only: no nutrition or ingredient claims beyond what each name says. Seasonal items that rotated off are left out.
import type { ImageMetadata } from 'astro';
import quesadilla from '../assets/fresh-food/menu/grilled-chicken-quesadilla.webp';
import macroMeal from '../assets/fresh-food/chicken-rice-meal.webp';
import breakfastBurrito from '../assets/fresh-food/menu/breakfast-burrito.webp';
import proteinTreats from '../assets/fresh-food/menu/protein-treats.webp';
import tribalJuices from '../assets/beverages/cold-pressed-juices.webp';
import teriyaki from '../assets/fresh-food/menu/teriyaki-chicken.webp';

export interface FreshMenu {
	id: string;
	name: string;
	blurb: string;
	image: ImageMetadata;
	alt: string;
	items: { name: string; tag?: string }[];
}

export const freshMenus: FreshMenu[] = [
	{
		id: 'lunch-dinner',
		name: 'Lunch and Dinner',
		blurb: 'Hearty, ready-to-eat entrées for a real lunch or dinner on site.',
		image: quesadilla,
		alt: 'Grilled chicken quesadilla wedges with a bowl of salsa',
		items: [
			{ name: 'Grilled Chicken Quesadilla' },
			{ name: 'Sesame Teriyaki Salmon' },
			{ name: 'Chicken Parm on Zoodles', tag: 'Veggie noodles' },
			{ name: 'Grilled Chicken Burrito Bowl' },
			{ name: 'Texas Beef Chili', tag: 'Keto friendly' },
		],
	},
	{
		id: 'macro-meals',
		name: 'Macro Meals',
		blurb: 'Protein, a carb, and a vegetable in one portioned meal.',
		image: macroMeal,
		alt: 'Grilled chicken, broccoli, and rice in a takeout container with sauces',
		items: [
			{ name: 'Grilled Chicken, Sweet Potatoes & Zucchini' },
			{ name: 'Ground Turkey, Jasmine Rice & Green Beans' },
			{ name: 'Salmon, Cauliflower Mash & Broccoli' },
			{ name: 'Steak, Sweet Potatoes & Zucchini' },
			{ name: 'Shrimp, Jasmine Rice & Broccoli' },
		],
	},
	{
		id: 'breakfast',
		name: 'Breakfast',
		blurb: 'For early shifts and the end of the night shift.',
		image: breakfastBurrito,
		alt: 'Breakfast burrito cut in half to show egg and filling',
		items: [
			{ name: 'Bacon and Egg Breakfast Burrito' },
			{ name: "Egg White Farmer's Omelette" },
			{ name: 'Fresh Blueberry Protein Pancakes', tag: 'Protein' },
			{ name: 'Turkey Bacon Wrapped Egg Bites' },
			{ name: 'Steak, Eggs & Potatoes' },
		],
	},
	{
		id: 'protein-treats',
		name: 'Protein Treats',
		blurb: "Sweet snacks with a protein boost, from Sweet Addison's and Dough'd Up.",
		image: proteinTreats,
		alt: 'Coworkers sharing boxes of cookies and baked treats at a table',
		items: [
			{ name: 'The Protein Cookie, Chocolate Chip', tag: "Sweet Addison's" },
			{ name: 'Chocolate Chip Protein Muffins', tag: "Sweet Addison's" },
			{ name: 'Brookie', tag: "Sweet Addison's" },
			{ name: 'Blueberry Protein Donuts', tag: "Dough'd Up" },
			{ name: 'Cinnamon Roll Protein Donuts', tag: "Dough'd Up" },
		],
	},
	{
		id: 'cold-pressed-juice',
		name: 'Cold-Pressed Juice',
		blurb: 'Fresh cold-pressed juices from Tribal.',
		image: tribalJuices,
		alt: 'Three bottles of Tribal cold-pressed juice on a wooden table',
		items: [
			{ name: 'Beats' },
			{ name: 'Chief' },
			{ name: 'Fire Starter' },
			{ name: 'Medicine Man' },
			{ name: 'Sunshine' },
		],
	},
	{
		id: 'new',
		name: 'New on the Menu',
		blurb: 'The latest additions. Ask for them at your site.',
		image: teriyaki,
		alt: 'Glazed teriyaki chicken pieces',
		items: [
			{ name: 'Teriyaki Chicken Stir Fry Bowl' },
			{ name: 'Cajun Shrimp Pasta' },
			{ name: 'Chicken Philly Cheesesteak Bowl' },
			{ name: 'Steak Tacos' },
			{ name: 'Buffalo Chicken Wrap' },
		],
	},
];
