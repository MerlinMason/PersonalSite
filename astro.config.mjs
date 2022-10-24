import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import remarkReadingTime from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
    site: "https://merlinmason.co.uk",
    integrations: [
        mdx({
            remarkPlugins: [remarkReadingTime],
        }),
        tailwind(),
        react(),
    ],
    markdown: {
        shikiConfig: {
            theme: "material-ocean",
            wrap: true, // Enable word wrap to prevent horizontal scrolling
        },
    },
});
