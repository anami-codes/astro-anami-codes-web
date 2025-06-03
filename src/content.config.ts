import { glob, file } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const blogSchema = z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		description: z.string().optional(),
		published: z.string(),
		pubDate: z.coerce.date(),
		banner: z.string().optional(),
		slug: z.string().optional(),
		tags: z.string().array().optional(),
		categories: z.string().array().optional(),
	})

function getBlog(lang:string)
{
	return  defineCollection({
		loader: glob({ base: `./src/content/blog/${lang}/`, pattern: '**/*.{md,mdx}' }),
		schema: blogSchema,
	});
}

const homepageGamesCollection = defineCollection({
	loader: file("src/content/data/homepage.json", { parser: (text) => JSON.parse(text).games }),
	schema: z.object({
		id: z.string(),
		gameCover: z.string(),
		gameLink: z.string(),
	  }),
});

const homepageProjectsCollection = defineCollection({
	loader: file("src/content/data/homepage.json", { parser: (text) => JSON.parse(text).projects }),
	schema: z.object({
		id: z.string(),
		link: z.string(),
		target: z.string(),
		show: z.boolean(),
	  }),
});

export const collections = {
	'blogEn': getBlog("en"),
	'blogEs': getBlog("es"),
	'homepageGames': homepageGamesCollection, 
	'homepageProjects': homepageProjectsCollection
};
