document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

