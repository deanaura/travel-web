document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu-list").classList.toggle("active");
  document.querySelector(".btn-list").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".js-testi-slider", {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".js-testi-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".js-destination-slider", {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".js-desti-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 4,
      },
    },
  });
});
