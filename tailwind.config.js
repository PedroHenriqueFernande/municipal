/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gold': '#E5C875',
                'red-custom': '#D92525',
                'dark-red': '#4a0a0a',
                'gray-text': '#cccccc',
            },
            fontFamily: {
                'heading': ['"Black Ops One"', 'cursive'],
                'body': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
