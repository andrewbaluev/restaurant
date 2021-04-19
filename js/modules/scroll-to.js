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