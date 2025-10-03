/** Menu init (on mobile only).
 * Requires HTML:
 *  - <button id="hamburger" aria-controls="site-nav" aria-expanded="false">…</button>
 *  - <nav id="site-nav" aria-hidden="true">…</nav>
 * CSS must have .menu-open .mobile-nav
 */
export function initMenu() {
  const body = document.body;
  const btnHamburger = document.getElementById('hamburger');
  const nav = document.getElementById('site-nav');

  if (!btnHamburger || !nav) return;

  const openMenu = () => {
    body.classList.add('menu-open');
    // ARIA
    btnHamburger.setAttribute('aria-expanded', 'true');
    btnHamburger.setAttribute('aria-label', 'Close menu');
    nav.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    body.classList.remove('menu-open');
    // ARIA
    btnHamburger.setAttribute('aria-expanded', 'false');
    btnHamburger.setAttribute('aria-label', 'Open menu');
    nav.setAttribute('aria-hidden', 'true');
  };

  const toggleMenu = () =>
    body.classList.contains('menu-open') ? closeMenu() : openMenu();

  // Hamburger button click —> open/close menu
  btnHamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // because document has click listener too
    toggleMenu();
  });

  // Click OUTSIDE menu —> close menu
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-nav') && !e.target.closest('#hamburger')) {
      closeMenu();
    }
  });

  // Esc —> close menu
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Click on link in menu —> close menu
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });
}
