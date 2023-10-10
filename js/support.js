function initializeEvents() {
    const navbar = document.querySelector('.navbar');
    const headerImg = document.querySelector('.img-section');
    const header = document.querySelector('.header');
    var lastScroll = 0;

    window.addEventListener("load", () => {
        const imgHeight = headerImg.offsetHeight;
        header.style.height = String(imgHeight) + 'px';
    });

    window.addEventListener("scroll", () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

        if (window. scrollY != 0){
            navbar.style.opacity = '0.2';
            headerImg.style.marginTop = '0';
            navbar.style.transform = 'translateY(-80px)';
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