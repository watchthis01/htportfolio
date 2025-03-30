/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        bg: 'var(--color-bg)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'sound1': 'soundBars 0.8s linear infinite',
        'sound2': 'soundBars 0.8s linear infinite 0.2s',
        'sound3': 'soundBars 0.8s linear infinite 0.4s',
        'sound4': 'soundBars 0.8s linear infinite 0.6s',
      },
      keyframes: {
        soundBars: {
          '0%, 100%': { height: '0.25rem' },
          '50%': { height: '1rem' },
        },
      },
    },
  },
  plugins: [],
}