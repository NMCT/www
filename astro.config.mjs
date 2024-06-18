// astro.config.ts
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    icon(),
  ],
  server: {
    port: 3210,
  },
})
