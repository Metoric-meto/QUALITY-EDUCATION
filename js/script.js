'use strict';

// Utility function to add event listeners
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// Navbar toggle
const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
}

addEventOnElem(navToggler, 'click', toggleNavbar);
if (navCloseBtn) {
  navCloseBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  });
}

// Close navbar when clicking on any navbar links
const navLinks = document.querySelectorAll('[data-nav-link]');

const closeNavbar = function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
}

addEventOnElem(navLinks, 'click', closeNavbar);

// Header active on scroll
const header = document.querySelector('[data-header]');

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add('active')
    : header.classList.remove('active');
}

addEventOnElem(window, 'scroll', headerActive);

// Accordion toggle
const accordionAction = document.querySelectorAll('[data-accordion-action]');

const toggleAccordion = function () {
  this.classList.toggle('active');
}

addEventOnElem(accordionAction, 'click', toggleAccordion);

// Load more functionality
let loadmorebtn = document.querySelector('#load-more');
let currentitem = 4;

if (loadmorebtn) {
  loadmorebtn.onclick = () => {
    let card = [...document.querySelectorAll('.service .container .service-card')];
    for (let i = currentitem; i < currentitem + 4; i++) {
      card[i].style.display = 'inline-block';
    }
    currentitem += 4;
    if (currentitem >= card.length) {
      loadmorebtn.style.display = 'none';
    }
  }
}
