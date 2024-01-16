import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate', devOptions: {
                enabled: true
            },
            includeAssets: ['favicon.ico', 'favicon.png'],
            manifest: {
                name: 'Bizkit Dungeon',
                short_name: 'BizkitDungeon',
                description: 'Affrontez les seigneurs éthyliques du bizkitn',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/main.scss";`
            }
        }
    },
});