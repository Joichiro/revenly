const benefitsNav = document.querySelector('.benefits__nav');
const benefitsNavItems = document.querySelectorAll('.benefits__nav-item');
const benefitsCards = document.querySelectorAll('.benefits__card');

benefitsNav.addEventListener('click', (event) => {
  if (event.target.classList.contains('benefits__nav-item')) {
    benefitsNavItems.forEach((item) => item.classList.remove('active'));
    event.target.classList.add('active');
    benefitsCards.forEach((card) => {
      card.classList.remove('active');
      if (card.dataset.category === event.target.dataset.category) card.classList.add('active');
    });
  }
});
