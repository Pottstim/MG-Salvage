/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors - Deep neutral palette with orange accent
        charcoal: {
          50: '#f7f7f8',
          100: '#efeef0',
          200: '#e0dde2',
          300: '#c9c5cd',
          400: '#a8a1ae',
          500: '#8a8090',
          600: '#706875',
          700: '#5b5560',
          800: '#4d484f',
          900: '#433f44',
          950: '#1a191b',
        },
        graphite: {
          50: '#f6f6f9',
          100: '#edecf1',
          200: '#d6d4e0',
          300: '#b3afc5',
          400: '#8a84a6',
          500: '#6b648a',
          600: '#564f6f',
          700: '#48425b',
          800: '#3e394c',
          900: '#353242',
          950: '#211f2b',
        },
        brand: {
          orange: '#e85d04',
          'orange-light': '#f08040',
          'orange-dark': '#c44a00',
          teal: '#0d9488',
          'teal-light': '#14b8a6',
          'teal-dark': '#0f766e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
