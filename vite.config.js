import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import fs from 'fs';
export default defineConfig({
    server: {
        host: 'notah.eit-host.com',  // Add this to force IPv4 only
       
    },
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
       
    ],
    ssr: {
        noExternal: ['@inertiajs/server','react-owl-carousel'], // Ensure SSR works correctly
    },
});
