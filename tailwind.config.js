/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "cream": "#fdfbf6",
                "ink": "#111111",
                "ink-light": "#444444",
                "border-ink": "#222222",
                "accent": "#E53935"
            },
            fontFamily: {
                "serif": ["Newsreader", "serif"]
            }
        },
    },
    plugins: [],
}
