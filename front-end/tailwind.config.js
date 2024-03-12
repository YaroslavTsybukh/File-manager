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
            backgroundImage: {
                chevronDown:
                    'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+)',
                plus: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4=)',
            },
            backgroundPosition: {
                'left-2-top-4': '8px 16px',
            },
            backgroundSize: {
                4.5: '18px',
            },
        },
    },
    plugins: [],
};
