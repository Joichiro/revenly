const howItWorksButtons = document.querySelectorAll('.how-it-works__button');
const howItWorksSchemes = document.querySelectorAll('.how-it-works__scheme');

howItWorksButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonType = event.currentTarget.dataset.type;
    howItWorksButtons.forEach((button) => button.classList.remove('active'));
    event.currentTarget.classList.add('active');

    howItWorksSchemes.forEach((scheme) => {
      const schemeType = scheme.dataset.type;
      if (buttonType === schemeType) {
        scheme.classList.add('active')
      } else {
        scheme.classList.remove('active')
      }
    });

  });
});
