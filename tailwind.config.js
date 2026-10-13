/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#03141a',
          900: '#051d26', // Primary Brand Deep Teal
          850: '#082531',
          800: '#0a2c3a',
          700: '#0e3d50',
          600: '#15526b',
        },
        brand: {
          dark: '#051d26',
          darker: '#03141a',
          navy: '#082531',
          accent: '#c5a059', // Restrained warm bronze accent
          accentLight: '#dfc07e',
          accentDark: '#9f7e3c',
          charcoal: '#1a2024',
          body: '#334155',
          muted: '#64748b',
          light: '#f8fafc',
          surface: '#f1f5f9',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widestBrand: '0.22em',
        spaced: '0.15em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(5, 29, 38, 0.05), 0 1px 2px 0 rgba(5, 29, 38, 0.03)',
        'corporate': '0 4px 20px -2px rgba(5, 29, 38, 0.08), 0 2px 6px -1px rgba(5, 29, 38, 0.04)',
        'elevated': '0 10px 30px -5px rgba(5, 29, 38, 0.12), 0 8px 10px -6px rgba(5, 29, 38, 0.06)',
      }
    },
  },
  plugins: [],
}
