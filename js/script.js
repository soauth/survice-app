function initializeEvents() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener("scroll", () => {
        if (window. scrollY != 0){
            // navbar.style.backgroundColor = 'black'
            navbar.style.opacity = '0.2';
        } else {
            navbar.style.opacity = '1';
            navbar.style.backgroundColor = 'white'
        }
    })
}

initializeEvents();