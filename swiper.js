var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  preventClicks: false,
  preventClicksPropagation: false,
  simulateTouch: true,
  touchStartPreventDefault: false,
});
