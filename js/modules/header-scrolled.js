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