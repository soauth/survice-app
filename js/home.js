function initializeEvents() {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelector(".nav-items");
    const toggle = document.querySelector(".fa-bars");
    const header = document.querySelector(".header");
    const headerImg = document.querySelector('.header-img');
    var lastScroll = 0;

    window.addEventListener("load", () => {
        console.log(445);
        header.style.height = String(headerImg.offsetHeight) + 'px';
    });

    toggle.addEventListener("click", () => {
        if (navItems.style.display == 'none') {
            navItems.style.display = 'flex';
        } else {
            navItems.style.display = 'none';
        }
    });

    window.addEventListener("scroll", () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

        if (window. scrollY != 0){
            navbar.style.opacity = '0.2';
            headerImg.style.marginTop = '0';
            navbar.style.transform = 'translateY(-80px)';
            header.style.height = String(headerImg.offsetHeight) + 'px';

        } else {
            navbar.style.opacity = '1';
            headerImg.style.marginTop = '80px';
            navbar.style.transform = 'translateY(0)';
            header.style.height = String(headerImg.offsetHeight + navbar.offsetHeight) + 'px';
        }

        if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
        } else{
            lastScroll = currentScroll;
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
        }
    });
}

initializeEvents();