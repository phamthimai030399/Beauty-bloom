// ad popup slider
const adSlider = new Swiper(".ad-slider", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".ad-next",
    prevEl: ".ad-prev",
  },
  pagination: {
    el: ".ad-pagination",
    clickable: true,
  },
});

// hot product slider
const hotSlider = new Swiper(".hot-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 800,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".hot-next",
    prevEl: ".hot-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

// instagram slider
const igSlider = new Swiper(".ig-slider", {
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 800,
  centeredSlides: false,
  loop: true,
  breakpoints: {
    992: {
      centeredSlides: true,
      spaceBetween: 20,
    },
    992: {
      centeredSlides: true,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".ig-next",
    prevEl: ".ig-prev",
  },
});

// const hotLink = document.querySelectorAll(".hot-nav .nav-link");
// Array.from(hotLink).forEach((btn) => {
//   btn.addEventListener("click", () => {
//     hotSlider.update();
//   });
// });
