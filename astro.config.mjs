import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: "https://merlinmason.co.uk",
    trailingSlash: 'never',
    integrations: [
        mdx(),
        tailwind(),
        react({
            include: ["**/react/*"],
        }),
        sitemap()
    ],
    markdown: {
        shikiConfig: {
            theme: "material-theme-ocean",
            wrap: true, // Enable word wrap to prevent horizontal scrolling
        },
    },
});
