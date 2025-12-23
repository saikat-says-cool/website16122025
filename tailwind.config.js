/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: '#F5F4F0',
                ink: {
                    primary: '#1A1A1A',
                    secondary: '#4A4A4A',
                },
                accent: {
                    blue: '#2B4C7E',
                },
                sketch: '#1A1A1A',
            },
            fontFamily: {
                hand: ['Cormorant Garamond', 'serif'],
                tech: ['IBM Plex Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
