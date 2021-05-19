// ********** fixed navbar ************
const header = document.querySelector('header');
const navbar = document.querySelector('nav');
const navContainer = document.querySelector('.nav-container');
const barsIcon = document.querySelector('#bars-icon');
const logoIcon = document.querySelector('#logo-icon');
const downArrow = document.querySelector('#arrow');
const aboutContainer = document.querySelector('#about-container');
const clientHeight = window.innerHeight;
let isDropped = false;

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight < clientHeight) {
        // barsIcon.classList.remove("bars-icon-scrolled");
        // logoIcon.classList.remove("logo-icon-scrolled");
        if (!isDropped) navContainer.classList.remove("nav-con-bg-change");
        // navLinks.map(link => link.classList.remove("nav-links-scrolled"));
    } else {
        // barsIcon.classList.add('bars-icon-scrolled');
        // logoIcon.classList.add('logo-icon-scrolled');
        navContainer.classList.add("nav-con-bg-change");
        // navLinks.map(link => link.classList.add("nav-links-scrolled"));
    }
});


barsIcon.addEventListener('click', function() {
    if (!isDropped) {
        navContainer.classList.add('nav-con-bg-change');
        barsIcon.classList.add("bars-icon-menu-opened");
        logoIcon.classList.add("logo-icon-menu-opened");
        isDropped = true;
    } else {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight < clientHeight) {
            navContainer.classList.remove('nav-con-bg-change');
        }
        barsIcon.classList.remove("bars-icon-menu-opened");
        logoIcon.classList.remove("logo-icon-menu-opened");
        isDropped = false;
    }
});

downArrow.addEventListener('click', function() {
    aboutContainer.scrollIntoView(true);
});


// barsIcon.addEventListener('click', function() {
//     if (isDropped) {
//         navbar.classList.remove("nav-menu-opened");
//         dropdownMenu.classList.remove("dropdown-list-opened");
//         barsIcon.classList.remove("bars-icon-menu-opened");
//         logoIcon.classList.remove("logo-icon-menu-opened");
//         dropdownListItems.map(item => item.classList.remove("dropdown-list-items-visible"));
//         isDropped = false;

//     } else {
//         navbar.classList.add("nav-menu-opened");
//         dropdownMenu.classList.add("dropdown-list-opened");
//         barsIcon.classList.add("bars-icon-menu-opened");
//         logoIcon.classList.add("logo-icon-menu-opened");
//         dropdownListItems.map(item => item.classList.add("dropdown-list-items-visible"));
//         isDropped = true;

//     }
// })

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