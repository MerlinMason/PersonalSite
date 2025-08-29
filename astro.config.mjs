import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://merlinmason.co.uk",
    integrations: [
        mdx(), 
        tailwind(), 
        react({
            include: ['**/react/*']
        }),
  ],
    markdown: {
        shikiConfig: {
            theme: "material-theme-ocean",
            wrap: true, // Enable word wrap to prevent horizontal scrolling
        },
    },
});
