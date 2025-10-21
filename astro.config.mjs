import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare(),
  site: 'https://isonmynet.work',
  trailingSlash: 'ignore', // 👈 This lets both /referral and /referral/ work
});
