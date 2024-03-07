const modal = document.querySelector('.modal');

const modalForm = document.querySelector('.modal__form');

const getAccessButtons = document.querySelectorAll('.get-access-button');

getAccessButtons.forEach((button) => {
  button.addEventListener('click', () => modal.classList.add('active'));
});

modal.addEventListener('click', (event) => {
  const isLayout = event.target.classList.contains('modal');
  const isBody = event.target.classList.contains('modal__body');
  if (isLayout || isBody) modal.classList.remove('active');
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(modalForm);
  const userName = formData.get('userName');
  const userEmail = formData.get('userEmail');

  modalForm.reset();

  fetch('https://hook.us1.make.com/2p819y3usxh49rr0kb3tu6kzt52wh5d5', {
    method: 'POST',
    data: { userName, userEmail },
  }).then(() => {
    modal.classList.remove('active');
  });
});
