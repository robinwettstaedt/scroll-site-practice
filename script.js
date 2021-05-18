// ********** fixed navbar ************

const navbar = document.querySelector('nav');
const barsIcon = document.querySelector('#bars-icon');
const logoIcon = document.querySelector('#logo-icon');
const navLinks = [...document.querySelectorAll('#nav-links')];
const clientHeight = window.innerHeight;
const dropdownMenu = document.querySelector('.dropdown-list');
const dropdownListItems = [...document.querySelectorAll('.dropdown-list-items')];
let isDropped = false;

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight < clientHeight) {
        navbar.classList.remove("nav-scrolled");
        barsIcon.classList.remove("bars-icon-scrolled");
        logoIcon.classList.remove("logo-icon-scrolled");
        navLinks.map(link => link.classList.remove("nav-links-scrolled"));
    } else {
        navbar.classList.add("nav-scrolled");
        barsIcon.classList.add('bars-icon-scrolled');
        logoIcon.classList.add('logo-icon-scrolled');
        navLinks.map(link => link.classList.add("nav-links-scrolled"));
    }
});

barsIcon.addEventListener('click', function() {
    if (isDropped) {
        navbar.classList.remove("nav-menu-opened");
        dropdownMenu.classList.remove("dropdown-list-opened");
        barsIcon.classList.remove("bars-icon-menu-opened");
        logoIcon.classList.remove("logo-icon-menu-opened");
        dropdownListItems.map(item => item.classList.remove("dropdown-list-items-visible"));
        isDropped = false;

    } else {
        navbar.classList.add("nav-menu-opened");
        dropdownMenu.classList.add("dropdown-list-opened");
        barsIcon.classList.add("bars-icon-menu-opened");
        logoIcon.classList.add("logo-icon-menu-opened");
        dropdownListItems.map(item => item.classList.add("dropdown-list-items-visible"));
        isDropped = true;

    }
})

// barsIcon.addEventListener('click', function() {
//     if (dropdownMenu.style.display === "block") {
//         navbar.classList.remove("nav-menu-opened");
//         dropdownMenu.style.display = "none";
//         barsIcon.classList.remove("bars-icon-menu-opened");
//         logoIcon.classList.remove("logo-icon-menu-opened");

//     } else {
//         navbar.classList.add("nav-menu-opened");
//         dropdownMenu.style.display = "block";
//         barsIcon.classList.add("bars-icon-menu-opened");
//         logoIcon.classList.add("logo-icon-menu-opened");


//     }
// })