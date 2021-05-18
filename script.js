// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// // ********** close links ************
// const navToggle = document.querySelector(".nav-toggle");
// const linksContainer = document.querySelector(".links-container");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function() {
//     // linksContainer.classList.toggle("show-links");

//     const linksHeight = links.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     if (containerHeight === 0) {
//         linksContainer.style.height = `${linksHeight}px`;
//     } else {
//         linksContainer.style.height = 0;
//     }
//     // console.log(linksContainer.getBoundingClientRect());
// });

// ********** fixed navbar ************

const navbar = document.querySelector('nav');
const barsIcon = document.querySelector('#bars-icon');
const logoIcon = document.querySelector('#logo-icon');
const navLinks = [...document.querySelectorAll('#nav-links')];
const clientHeight = window.innerHeight;

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


// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         // prevent default
//         e.preventDefault();
//         // navigate to specific spot
//         const id = e.currentTarget.getAttribute("href").slice(1);
//         const element = document.getElementById(id);

//         const navHeight = navbar.getBoundingClientRect().height;
//         const containerHeight = linksContainer.getBoundingClientRect().height;
//         const fixedNav = navbar.classList.contains("fixed-nav");
//         let position = element.offsetTop - navHeight;

//         if (!fixedNav) {
//             position = position - navHeight;
//         }
//         if (navHeight > 82) {
//             position = position + containerHeight;
//         }

//         window.scrollTo({
//             left: 0,
//             top: position,
//         });
//         // close
//         linksContainer.style.height = 0;
//     });
// });
// calculate heights