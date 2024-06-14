import { defineConfig } from 'unocss'

// root.css file is imported to get the root variables (imported in `/pages/index.astro`)

export default defineConfig({
  theme: {
    colors: {
      // tokens
      default: 'var(--global-default)',
      meta: 'var(--global-meta)',
      brand: 'var(--global-brand)',
      light: 'var(--global-light)',
      'on-brand': 'var(--global-on-brand)',

      /* Background */
      page: 'var(--global-page)',
      surface: 'var(--global-surface)',

      /* Border */
      border: 'var(--global-border)',
    },
  },
})
