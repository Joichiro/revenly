const headerHamburger = document.querySelector('.header__hamburger');

const headerMenu = document.querySelector('.header__menu');

headerHamburger.addEventListener('click', () => {
  headerHamburger.classList.toggle('active');
  headerMenu.classList.toggle('active');
});
