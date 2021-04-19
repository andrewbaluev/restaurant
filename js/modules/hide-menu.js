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