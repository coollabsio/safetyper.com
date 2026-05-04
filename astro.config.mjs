import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://safetyper.com",
  trailingSlash: "never",
  server: {
    host: '0.0.0.0'
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
