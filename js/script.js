window.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector(".open_button");
  const closeModalBtn = document.querySelector(".modal__close");
  const modal = document.querySelector(".overlay");

  openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
});
new WOW().init();
