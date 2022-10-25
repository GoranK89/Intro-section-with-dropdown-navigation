'use strict';
const navbar = document.querySelector('.navbar');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const navLinks = document.querySelector('.nav-links');
const navbarMainLinks = document.querySelectorAll('.nav-link');
const navbarLinksWrapper = document.querySelector('.nav-log-links-container');

const arrowDown = document.querySelectorAll('.icon-arrow');
const heroImg = document.querySelector('.landing-img');

const featuresContent = document.querySelector('.features-dropdown-content');
const companyContent = document.querySelector('.company-dropdown-content');

let browserWidth = window.innerWidth;

// Navbar functionality

navbar.addEventListener('click', e => {
  const target = e.target;
  if (target === navbarMainLinks[0]) {
    featuresContent.classList.toggle('hide-content');
  } else {
    featuresContent.classList.add('hide-content');
  }

  if (target === navbarMainLinks[1]) {
    companyContent.classList.toggle('hide-content');
  } else {
    companyContent.classList.add('hide-content');
  }

  // Replace arrow img based on popup content state
  if (!featuresContent.classList.contains('hide-content')) {
    arrowDown[0].src = 'images/icon-arrow-up.svg';
  } else {
    arrowDown[0].src = 'images/icon-arrow-down.svg';
  }

  if (!companyContent.classList.contains('hide-content')) {
    arrowDown[1].src = 'images/icon-arrow-up.svg';
  } else {
    arrowDown[1].src = 'images/icon-arrow-down.svg';
  }
});

// Mobile navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');
const overlay = document.querySelector('.overlay');

btnNavEl.addEventListener('click', function () {
  navbar.classList.toggle('nav-open');
  overlay.classList.toggle('hide');
});

// Hero img change on width
if (browserWidth <= 550) {
  heroImg.src = 'images/image-hero-mobile.png';
} else {
  heroImg.src = 'images/image-hero-desktop.png';
}

// Mobile nav replace absolute with position static
if (browserWidth <= 550) {
  navbarLinksWrapper.addEventListener('click', function (e) {
    const target = e.target;
    if (target === navbarMainLinks[0]) {
      featuresContent.classList.toggle('position-static');
    } else {
      featuresContent.classList.remove('position-static');
    }

    if (target === navbarMainLinks[1]) {
      companyContent.classList.toggle('position-static');
    } else {
      companyContent.classList.remove('position-static');
    }
  });
}
