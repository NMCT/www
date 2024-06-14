import { defineConfig } from 'unocss'

// root.css file is imported to get the root variables (imported in `/pages/index.astro`)

export default defineConfig({
  theme: {
    colors: {
      neutral: {
        50: '#f5f5f5',
        100: '#e5e6e6',
        200: '#cdcfd0',
        300: '#b9bcbd',
        400: '#a6aaab',
        500: '#929798',
        600: '#767c7d',
        700: '#5c6061',
        800: '#404446',
        900: '#25292a',
        950: '#0b0d0e',
      },

      // tokens
      default: 'var(--global-default, <alpha-value>)',
      meta: 'var(--global-meta, <alpha-value>)',
      brand: 'var(--global-brand, <alpha-value>)',
      light: 'var(--global-light)',
      'on-brand': 'var(--global-on-brand)',

      /* Background */
      page: 'var(--global-page',
      surface: 'var(--global-surface)',

      /* Border */
      border: 'var(--global-border)',
    },
  },
})
