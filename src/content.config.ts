import { glob, file } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		description: z.string().optional(),
		published: z.string(),
		pubDate: z.coerce.date(),
		banner: z.string().optional(),
		slug: z.string().optional(),
		tags: z.string().array().optional(),
		categories: z.string().array().optional(),
	}),
});

const homepageGames = defineCollection({
	loader: file("src/content/data/homepage.json", { parser: (text) => JSON.parse(text).games }),
	schema: z.object({
		id: z.string(),
		gameCover: z.string(),
		gameLink: z.string(),
	  }),
});

const homepageProjects = defineCollection({
	loader: file("src/content/data/homepage.json", { parser: (text) => JSON.parse(text).projects }),
	schema: z.object({
		id: z.string(),
		link: z.string(),
		target: z.string(),
		show: z.boolean(),
	  }),
});

export const collections = { blog, homepageGames, homepageProjects };
