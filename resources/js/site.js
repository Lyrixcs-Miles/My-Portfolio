// Shared page behaviour: theme toggle, mobile menu, copy email, footer year.
// Use inside a page component:  x-data="{ ...site(), ...yourPageData }"  and call initSite() from init().
function site() {
  return {
    dark: false,
    mm: false,
    copied: false,
    motionOk: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    initSite() {
      this.dark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.$watch('dark', v => localStorage.setItem('theme', v ? 'dark' : 'light'));
      const yr = document.getElementById('yr');
      if (yr) yr.textContent = new Date().getFullYear();
    },

    async copyEmail() {
      try {
        await navigator.clipboard.writeText('LyrixcsMiles@gmail.com');
        this.copied = true;
        setTimeout(() => (this.copied = false), 1800);
      } catch {
        window.location.href = 'mailto:LyrixcsMiles@gmail.com';
      }
    },
  };
}

// Plain page with no extra data
function page() {
  return { ...site(), init() { this.initSite(); } };
}
