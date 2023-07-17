/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            fontSize: {
                hero: ["clamp(2rem, -0.5000rem + 6.6667vw, 5.5rem)", { lineHeight: 1 }],
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 0.3s ease-in-out infinite",
            },
            cursor: {
                wave: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='72' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👋</text></svg>\"), pointer",
            },
        },
        animation: {
            like: "ping 0.75s;",
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require("@tailwindcss/typography"),
        // ...
    ],
};
