// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    site: 'https://anami-codes.net',
    integrations: [mdx(), sitemap(), icon(), preact()],
});