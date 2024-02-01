/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'purple-800': 'rgba(127, 86, 217, 1)',
                'tertiary-600': 'rgba(71, 84, 103, 1)',
                'primary-900': 'rgba(16, 24, 40, 1)',
                'secondary-700': 'rgba(52, 64, 84, 1)',
            },
        },
    },
    plugins: [],
};
