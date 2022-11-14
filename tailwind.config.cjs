/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "sky-gray": "linear-gradient(to bottom, rgb(14 165 233) 50%, rgb(156 163 175) 50%);",
                "yellow-300-yellow-600": "linear-gradient(to bottom, rgb(253 224 71) 50%, rgb(202 138 4) 50%);",
                "blue-rose": "linear-gradient(to bottom, #53A4CF 50%, #F16E57 50%);",
            },
            animation: {
                fade: "fadeOut 300ms ease-in-out",
            },

            keyframes: (theme) => ({
                fadeOut: {
                    "0%": { backgroundColor: theme("colors.red.300") },
                    "100%": { backgroundColor: theme("colors.transparent") },
                },
            }),
        },
    },
    plugins: [],
};
