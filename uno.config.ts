import { defineConfig } from 'unocss'

// root.css file is imported to get the root variables (imported in `/pages/index.astro`)

export default defineConfig({
  theme: {
    colors: {
      neutral: {
        50: 'rgb(var(--global-color-neutral-50))',
        100: 'rgb(var(--global-color-neutral-100))',
        200: 'rgb(var(--global-color-neutral-200))',
        300: 'rgb(var(--global-color-neutral-300))',
        400: 'rgb(var(--global-color-neutral-400))',
        500: 'rgb(var(--global-color-neutral-500))',
        600: 'rgb(var(--global-color-neutral-600))',
        700: 'rgb(var(--global-color-neutral-700))',
        800: 'rgb(var(--global-color-neutral-800))',
        900: 'rgb(var(--global-color-neutral-900))',
        950: 'rgb(var(--global-color-neutral-950))',
      },

      // tokens
      default: 'rgb(var(--global-default) / <alpha-value>)',
      meta: 'rgb(var(--global-meta) / <alpha-value>)',
      brand: 'rgb(var(--global-brand) / <alpha-value>)',
      light: 'rgb(var(--global-light))',
      'on-brand': 'rgb(var(--global-on-brand))',

      /* Background */
      page: 'rgb(var(--global-page))',
      surface: 'rgb(var(--global-surface))',

      /* Border */
      border: 'rgb(var(--global-border))',
    },

    // Add the font family
    fontFamily: {
      sans: "'Inter Variable', sans-serif",
    },
  },
})
