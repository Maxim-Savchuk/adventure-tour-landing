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
