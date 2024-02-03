import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            assets: '/src/assets',
            components: '/src/components',
            core: '/src/core',
            layout: '/src/layout',
            pages: '/src/pages',
            routes: '/src/routes',
            styles: '/src/styles',
        },
    },
});
