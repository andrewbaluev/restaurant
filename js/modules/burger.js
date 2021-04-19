// Бургер меню
const nav = document.querySelector('#nav');
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

mobileNavToggleBtn.addEventListener('click', function () {
    nav.classList.toggle('nav-mobile');
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
})

// Показать ссылки подменю на мобильной версии
const subnavLink = document.querySelector('[data-link="subnav"]');
subnavLink.addEventListener('click', function (event) {
    if (nav.classList.contains('nav-mobile')) {
        event.preventDefault();
        this.nextElementSibling.classList.toggle('active')
    }
})