// script.js

window.addEventListener('load', function () {
    const loadingWrapper = document.getElementById('loading-wrapper');
    loadingWrapper.style.opacity = '0';
    setTimeout(function () {
        loadingWrapper.style.visibility = 'hidden';
    }, 3000);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});