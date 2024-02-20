const faqItems = document.querySelectorAll('.faq__list-item');

faqItems.forEach((faqItem) => {
  faqItem.addEventListener('click', (event) => {
    const isQuestion = event.target.classList.contains('faq__list-item-question');
    if (isQuestion) {
      const question = event.currentTarget.querySelector('.faq__list-item-question');
      const answer = event.currentTarget.querySelector('.faq__list-item-answer');

      if (!question.classList.contains('active')) closeAllFaqItems();

      question.classList.toggle('active');
      answer.classList.toggle('active');
    }
  });
});

function closeAllFaqItems() {
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq__list-item-question');
    const answer = item.querySelector('.faq__list-item-answer');
    question.classList.remove('active');
    answer.classList.remove('active');
  });
}
