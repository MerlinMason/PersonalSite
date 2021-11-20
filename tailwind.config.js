module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            fontSize: {
                hero: ["clamp(2rem, -0.5000rem + 6.6667vw, 6rem)", { lineHeight: 1 }],
            },
        },
    },
    plugins: [],
};
