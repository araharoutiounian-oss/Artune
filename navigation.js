(() => {
  if (window.artuneMenuReady) return;
  window.artuneMenuReady = true;
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const toggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('#primary-navigation');
  const offerings = header.querySelector('.offerings-menu');
  const closeMenu = () => {
    header.classList.remove('is-menu-open');
    document.body.classList.remove('is-menu-locked');
    toggle?.setAttribute('aria-expanded', 'false');
    if (offerings) offerings.open = false;
  };
  toggle?.addEventListener('click', () => {
    const open = !header.classList.contains('is-menu-open');
    closeMenu();
    header.classList.toggle('is-menu-open', open);
    document.body.classList.toggle('is-menu-locked', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const dropdownOpen = offerings?.open;
    const menuOpen = header.classList.contains('is-menu-open');
    closeMenu();
    if (menuOpen) toggle?.focus();
    else if (dropdownOpen) offerings.querySelector('summary').focus();
  });
  offerings?.querySelector('summary').addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    offerings.open = true;
    const links = offerings.querySelectorAll('a');
    (event.key === 'ArrowDown' ? links[0] : links[links.length - 1])?.focus();
  });
  header.addEventListener('focusin', event => {
    if (offerings && !offerings.contains(event.target)) offerings.open = false;
  });
  window.matchMedia('(max-width: 980px)').addEventListener('change', closeMenu);
})();
