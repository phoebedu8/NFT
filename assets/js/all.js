"use strict";

// Swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
}); // Swiper

var swiper01 = new Swiper(".swiper_intro", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  centeredSlides: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
}); // vanilla JS
// init with element

var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
}); // init with selector

var msnry = new Masonry('.grid', {// options...
});
//# sourceMappingURL=all.js.map
