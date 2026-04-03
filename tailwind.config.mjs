/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#020c1b',
        deep: '#0a192f',
        surface: '#112240',
        elevated: '#1a2f4a',
        matrix: '#00ff41',
        bright: '#64ffda',
        electric: '#0080ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'glass': 'rgba(10, 25, 47, 0.85)',
      }
    },
  },
  plugins: [],
}
