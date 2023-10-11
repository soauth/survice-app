function initializeEvents() {
    const navbar = document.querySelector('.navbar');
    const headerImg = document.querySelector('.img-section');
    const header = document.querySelector('.header');
    const navItems = document.querySelector(".nav-items");
    const toggle = document.querySelector(".fa-bars");
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
            navbar.style.transform = 'translateY(-80px)';
            // navItems.style.display = 'none';
        } else {
            navbar.style.opacity = '1';
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