/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts}'],
  // Class-based dark mode: theme.js toggles the `dark` class on <html>.
  darkMode: 'class',
  theme: {
    extend: {
      // Colors are driven by CSS custom properties defined in src/style.css.
      // The `.dark` class swaps the underlying variable values.
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        hair: 'var(--hair)',
        card: 'var(--card)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
