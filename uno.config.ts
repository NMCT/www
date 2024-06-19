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
      mono: "'Roboto Mono Variable', monospace",
    },

    // animation: {
    keyframes: {
      bellshake: {
        '0%': { transform: 'rotate(0)' },
        '2%': { transform: 'rotate(11deg)' },
        '4%': { transform: 'rotate(-11deg)' },
        '6%': { transform: 'rotate(7deg)' },
        '8%': { transform: 'rotate(-7deg)' },
        '10%': { transform: 'rotate(4deg)' },
        '12%': { transform: 'rotate(-4deg)' },
        '14%': { transform: 'rotate(2deg)' },
        '16%': { transform: 'rotate(-2deg)' },
        '18%': { transform: 'rotate(1deg)' },
        '19%': { transform: 'rotate(0)' },
        '100%': { transform: 'rotate(0)' },
      },
      // },
      //4s 1s ease-in-out infinite
      // bellshake: 'bellshake',
    },
  },

  safelist: [
    // Modules can be up to 36 study credits (and we don't know it in advance)
    ...Array.from({ length: 30 }, (_, i) => `row-span-${i + 1}`),
    // Modules can start at any of the 6 semesters
    ...Array.from({ length: 6 }, (_, i) => `col-start-${i + 1}`),
  ],
})
