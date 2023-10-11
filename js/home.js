function initializeEvents() {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelector(".nav-items");
    const toggle = document.querySelector(".fa-bars");
    const headerImg = document.querySelector('.header-img');
    var lastScroll = 0;

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
            // navItems.style.display = 'none';

        } else {
            navbar.style.opacity = '1';
            headerImg.style.marginTop = '80px';
            navbar.style.transform = 'translateY(0)';
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