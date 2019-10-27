document.addEventListener('DOMContentLoaded', () => {
    const bvLabels = [...document.querySelectorAll('.brand-voice-label')];
    bvLabels.forEach((label) => {
        label.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    });
});



// WEBPACK FOOTER //
// ./src/assets/js/homepage/brandvoice-setup.js