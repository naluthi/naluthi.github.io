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