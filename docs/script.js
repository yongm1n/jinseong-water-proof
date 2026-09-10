// Native details remain usable without JavaScript. Links open their case first.
function revealLinkedWork() {
  const id = window.location.hash.slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener('hashchange', revealLinkedWork);
document.querySelectorAll('a[href^="#work-"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target instanceof HTMLDetailsElement) target.open = true;
  });
});
revealLinkedWork();

const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
if (siteHeader && menuToggle && mainNav) {
  document.documentElement.classList.add('js');
  const closeMenu = () => {
    siteHeader.removeAttribute('data-menu');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    if (open) siteHeader.setAttribute('data-menu', 'open');
    else siteHeader.removeAttribute('data-menu');
  });
  mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
}
