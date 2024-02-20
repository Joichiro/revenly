const blogSlider = new Swiper('.blog__slider .swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 1.7,
    },
    768: {
      slidesPerView: 2.4,
    },
    992: {
      slidesPerView: 2.8,
    },
    1200: {
      slidesPerView: 3.3,
    },
  },
});
