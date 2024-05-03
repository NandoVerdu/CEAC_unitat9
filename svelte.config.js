
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({pages: "docs"}),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/CEAC_UNITAT9' : '',
        }
    }
};

export default config;