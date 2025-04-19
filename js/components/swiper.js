export function initializeSwiper() {
  new Swiper(".wishes__slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 1,
    slideClass: "wishes__slide",
    wrapperClass: "wishes__wrapper",
    breakpoints: {
      768.98: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024.98: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".wishes__pagination",
      clickable: true,
    },
  });
}
