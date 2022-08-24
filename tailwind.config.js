module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            fontSize: {
                hero: ["clamp(2rem, -0.5000rem + 6.6667vw, 5.5rem)", { lineHeight: 1 }],
            },
        },
    },
    plugins: [],
};
