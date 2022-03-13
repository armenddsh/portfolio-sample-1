

const menuButton = document.getElementById("navbar-toogle-btn");
const navbar = document.getElementById("navbar");
const navbarNav = document.getElementById("navbar-nav");

menuButton.addEventListener("click",function(event){
    if (menuButton.classList.contains("active")) {
        menuButton.classList.remove("active");
        navbarNav.style.opacity = 0;
    } else {
        navbarNav.style.opacity = 1;
        menuButton.classList.add("active");
    }
});