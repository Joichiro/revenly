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

  fetch('../contact-form-handler.php', {
    method: 'POST',
    data: { userName, userEmail },
  }).then(() => {
    modal.classList.remove('active');
  });
});
