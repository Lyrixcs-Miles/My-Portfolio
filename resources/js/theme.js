// Shared Tailwind settings for every page. Load right after the Tailwind CDN script.
// Palette: "Jacaranda" — Pretoria's jacaranda trees, from night bloom to blossom mist,
// with Highveld sun as the warm highlight.
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
        ink: '#140D26', // dark-mode page background
        paper: '#FBF9FF', // light-mode page background
        muted: '#5F5878', // secondary text, light mode
        'muted-dark': '#B8AFD3', // secondary text, dark mode
        line: '#E4DCF3', // hairlines, light mode
        'line-strong': '#D3C8EA',

        // jacaranda palette, darkest to lightest
        night: '#2A1B4A',
        violet: '#4B2C83',
        jaca: '#7046C1',
        petal: '#9B72E6',
        lilac: '#C3A8F5',
        mist: '#E6DAFF',
        sun: '#FFC83D',
      },
    },
  },
};
