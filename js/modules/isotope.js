const menuContainer = document.querySelector('.menu-container');
const menuFilters = document.querySelectorAll('.filter-item');

// if (menuContainer) {
let iso = new Isotope(menuContainer, {
    itemSelector: '.menu-item',
    layoutMode: 'fitRows'
});

menuFilters.forEach((e) => {
    e.addEventListener('click', function () {
        menuFilters.forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        iso.arrange({
            filter: this.getAttribute('data-filter')
        });

        iso.on('arrangeComplete', function () {
            AOS.refresh()
        });
    })
})
// }