// Shared Tailwind settings for every page. Load right after the Tailwind CDN script.
// Palette: "Jacaranda" — Pretoria's jacaranda trees, from night bloom to blossom mist,
// with Soft Apricot as the warm highlight.
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['PT Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        // theme-aware accent (see site.css)
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-light': 'rgb(var(--accent-light) / <alpha-value>)',
        'on-accent': 'rgb(var(--on-accent) / <alpha-value>)',

        // neutrals
        chaos: '#0F0F0F',
        cloud: '#EFEAF8',
        ink: '#17131F', // dark-mode page background
        paper: '#FAF8FC', // light-mode page background
        muted: '#5F5878', // secondary text, light mode
        'muted-dark': '#B8AFD3', // secondary text, dark mode
        line: '#E4DCF3', // hairlines, light mode
        'line-strong': '#D3C8EA',

        // jacaranda palette, darkest to lightest
        night: '#2E2640',
        violet: '#5A4A80',
        jaca: '#8572B8',
        petal: '#A796D6',
        lilac: '#CBBFEA',
        mist: '#ECE6F8',
        sun: '#F2CBB5',
      },
    },
  },
};
