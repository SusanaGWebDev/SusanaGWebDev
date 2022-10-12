var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor : true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });