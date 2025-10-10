// script.js

function hideLoader() {
    const loadingWrapper = document.getElementById('loading-wrapper');
    if (!loadingWrapper || loadingWrapper.classList.contains('loading-hidden')) {
        return;
    }

    loadingWrapper.classList.add('loading-hidden');

    setTimeout(() => {
        loadingWrapper.classList.add('loading-removed');
    }, 350);
}

window.addEventListener('load', hideLoader);
document.addEventListener('DOMContentLoaded', () => {
    // Fallback in case the load event takes too long
    setTimeout(hideLoader, 1000);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header hide/show on scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 100; // Minimum scroll distance to trigger hide/show

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If at the top of the page, always show the header
    if (currentScroll <= scrollThreshold) {
        header.classList.remove('header-hidden');
    }
    // If scrolling down and past the threshold, hide the header
    else if (currentScroll > lastScrollTop) {
        header.classList.add('header-hidden');
    }
    // If scrolling up, show the header
    else {
        header.classList.remove('header-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);