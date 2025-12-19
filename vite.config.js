import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import path from "path";
export default defineConfig(() => {
    const base = '/';
    return {
        plugins: [
            tailwindcss(),
            react(),
        ],
        base: base,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        },
        optimizeDeps: {
            include: ['react', 'react-dom', 'react-icons', 'react-icons/*'],
        }
    };
});
