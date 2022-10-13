import { URL, fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        // https://github.com/antfu/unplugin-vue-components
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            // dts: 'src/components.d.ts',
        }),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            extensions: ['vue', 'md'],
            // visit http://localhost:5173/sitemap.xml
            onRoutesGenerated: routes => (generateSitemap({ routes })),
        }),

        Icons({
            // experimental
            autoInstall: true,
        })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
