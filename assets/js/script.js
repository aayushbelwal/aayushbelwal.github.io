'use strict';

const addEventOnElement = function (element, type, callback) {
    if (element.length > 1) {
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener(type, callback);
        }
    } else {
        element.addEventListener(type, callback);
    }
}

// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const nav_toggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElement(nav_toggler, "click", toggleNavbar);


