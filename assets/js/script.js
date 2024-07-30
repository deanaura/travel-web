document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu-list").classList.toggle("active");
  document.querySelector(".btn-list").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const btnMundur = document.querySelector(".btn-mundur");
  const btnMaju = document.querySelector(".btn-maju");
  const cardList = document.querySelector(".card-list");

  const cardWidth = 220; // Adjusted to include gap
  const maxScroll = cardList.scrollWidth - cardList.clientWidth;
  let scrollPosition = 0;

  btnMundur.addEventListener("click", () => {
    scrollPosition -= cardWidth * 1;
    if (scrollPosition < 0) {
      scrollPosition -= scrollPosition;
    }
    cardList.style.transform = `translateX(-${scrollPosition}px)`;
  });

  btnMaju.addEventListener("click", () => {
    scrollPosition += cardWidth * 1;
    if (scrollPosition > maxScroll) {
      scrollPosition = maxScroll;
    }
    cardList.style.transform = `translateX(-${scrollPosition}px)`;
  });
});
