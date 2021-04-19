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


// Прелоадер
const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove()
    });
}


// Активное состояние у ссылок в navbar при прокрутке страницы
const navbarlinks = document.querySelectorAll('#nav .scrollto');

const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = document.querySelector(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)

document.addEventListener('scroll', navbarlinksActive)




// Плавная прокрутка со смещением заголовка
const scrollto = (el) => {
    let header = document.querySelector('#header')
    let offset = header.offsetHeight

    let elementPos = document.querySelector(el).offsetTop;

    window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
    })
}


// Убрать/добавить класс когда страница проскроллена
const selectHeader = document.querySelector('#header');
const selectTopbar = document.querySelector('#topbar');
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
            if (selectTopbar) {
                selectTopbar.classList.add('topbar-scrolled')
            }
        } else {
            selectHeader.classList.remove('header-scrolled')
            if (selectTopbar) {
                selectTopbar.classList.remove('topbar-scrolled')
            }
        }
    }
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);
}


// Кнопка наверх
const backtotop = document.querySelector('.back-to-top');
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active');
        } else {
            backtotop.classList.remove('active');
        }
    }
    window.addEventListener('load', toggleBacktotop)
    document.addEventListener('scroll', toggleBacktotop)
}


// Убрать меню при переходе по якорной ссылке на мобильной версии
const scrollToLinks = document.querySelectorAll('.scrollto');

scrollToLinks.forEach(function(e) {
    e.addEventListener('click', (evt) => {
        if (e.hash) {
            evt.preventDefault()
            
            if(nav.classList.contains('nav-mobile')) {
                nav.classList.remove('nav-mobile');
                mobileNavToggleBtn.classList.toggle('bi-list');
                mobileNavToggleBtn.classList.toggle('bi-x');
            }

            scrollto(e.hash)
        }
    })
})

/**
 * Events slider
 */

new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});


/**
 * Testimonials slider
 */
new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});


/**
 * Menu isotope and filter
 */

window.addEventListener('load', () => {
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
});

// GLightbox

const videoGlightbox = GLightbox({
    selector: '.video-glightbox'
});

/**
 * Initiate gallery glightbox 
 */
const galleryGlightbox = GLightbox({
    selector: '.gallery-glightbox',
    loop: true
});

// AOS
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    })
});