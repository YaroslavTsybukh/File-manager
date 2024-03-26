/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            padding: '40px',
        },
        extend: {
            spacing: {
                5.5: '22px',
                7.5: '30px',
                12.5: '50px',
                18: '72px',
                33: '132px',
            },
            colors: {
                'purple-800': 'rgba(127, 86, 217, 1)',
                'tertiary-600': 'rgba(71, 84, 103, 1)',
                'primary-900': 'rgba(16, 24, 40, 1)',
                'secondary-700': 'rgba(52, 64, 84, 1)',
                'white-200': 'rgba(243, 247, 254, 1)',
                'blue-100': 'rgba(231, 240, 254, 1)',
            },
            borderRadius: {
                12.5: '50px',
            },
            maxWidth: {
                123: '492px',
            },
            backgroundSize: {
                4.5: '18px',
            },
        },
    },
    plugins: [],
};
