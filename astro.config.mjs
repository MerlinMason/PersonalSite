import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: "https://merlinmason.co.uk/",
    integrations: [mdx(), tailwind(), react(), compress()],
    markdown: {
        shikiConfig: {
            theme: "material-ocean",
            wrap: true, // Enable word wrap to prevent horizontal scrolling
        },
    },
});
