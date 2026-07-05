// Loading overlay: this script is deferred, so it runs as soon as the DOM is
// ready — the overlay only stays visible while the page is still parsing.
const loadingWrapper = document.getElementById('loading-wrapper');

if (loadingWrapper) {
  loadingWrapper.classList.add('loading-hidden');
  setTimeout(() => loadingWrapper.classList.add('loading-removed'), 350);
}

// Sticky header: hide while scrolling down, reveal when scrolling up.
const header = document.querySelector('.header');
const SCROLL_THRESHOLD = 100;
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;

  requestAnimationFrame(() => {
    const y = window.scrollY;

    if (y <= SCROLL_THRESHOLD) {
      header.classList.remove('header-hidden');
    } else if (y > lastScrollY) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }

    lastScrollY = Math.max(0, y);
    ticking = false;
  });
}, { passive: true });
