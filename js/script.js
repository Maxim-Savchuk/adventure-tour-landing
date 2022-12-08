// -------- Header-menu --------

let navbar = document.querySelector('.header__navbar');

document.querySelector('#menu-btn').addEventListener('click', () => {
  navbar.classList.add('active');
});

document.querySelector('#nav-close').addEventListener('click', () => {
  navbar.classList.remove('active');
});

window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
});

// -------- Header-search ----------

let searchForm = document.querySelector('.header__searchform');

document.querySelector('#search-btn').addEventListener('click', () => {
  searchForm.classList.add('active');
});

document.querySelector('#close-search').addEventListener('click', () => {
  searchForm.classList.remove('active');
});

// -------- Swiper-slider ----------

var swiper = new Swiper('.home__slider', {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
