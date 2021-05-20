let isDropped = false;

const header = document.querySelector('header');
const navbar = document.querySelector('nav');
const navContainer = document.querySelector('.nav-container');

const barsIcon = document.querySelector('#bars-icon');
const logoIcon = document.querySelector('#logo-icon');
const downArrow = document.querySelector('#arrow');

const aboutContainer = document.querySelector('#about-container');

const navToggleCheckbox = document.querySelector('#nav-toggle');
const navListMobile = Array.from(document.querySelector('#nav-list-mobile').children);


window.addEventListener("scroll", function() {
    let scrollHeight = document.documentElement.scrollTop;
    let innerHeight = window.innerHeight;

    if (scrollHeight < innerHeight) {
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

// downArrow.addEventListener('click', function() {
//     aboutContainer.scrollIntoView(true);
// });

navListMobile.map(listElement => {
    listElement.addEventListener('click', function() {
        if (this.target == document.querySelector('#home-li')) {
            navContainer.classList.remove('nav-con-bg-change');
        }
        navToggleCheckbox.checked = false;
        isDropped = false;
    })
})