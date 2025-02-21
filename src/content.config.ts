import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		titleShort: z.string().optional(),
		subtitle: z.string().optional(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		banner: z.string().optional(),
		tags: z.string().array(),
	}),
});

export const collections = { blog };
