import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sourojit-saha.github.io',
  integrations: [mdx()],
  devToolbar: { enabled: false },
});
