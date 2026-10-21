// Shared Tailwind settings for every page. Load right after the Tailwind CDN script.
// Palette: "Storm" — a night thunderstorm over water, from abyss navy to sea mist,
// with Spray (soft sea-green) as the highlight. Token names are kept from the
// earlier palette so pages don't need renaming: night, violet, jaca, petal, lilac, mist, sun.
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
        cloud: '#E6ECEC',
        ink: '#061019', // dark-mode page background
        paper: '#F5F7F7', // light-mode page background
        muted: '#4E6266', // secondary text, light mode
        'muted-dark': '#9FB5B6', // secondary text, dark mode
        line: '#DCE3E3', // hairlines, light mode
        'line-strong': '#C5D0D0',

        // storm palette, darkest to lightest (sun = highlight)
        night: '#041421',
        violet: '#052530',
        jaca: '#1F4B53',
        petal: '#4C7275',
        lilac: '#86B9B0',
        mist: '#DDE6E4',
        sun: '#A9D3CB',
      },
    },
  },
};
