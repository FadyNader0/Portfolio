var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  centeredSlides: true,
  slidesPerView: "auto",
//    loop: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
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
});
