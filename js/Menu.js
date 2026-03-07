document.addEventListener("DOMContentLoaded", () => {

  const btnMenu = document.querySelector("#btn-menu");
  const navMenu = document.querySelector("#nav-menu");
  const btnClose = document.querySelector("#btn-close");

  // Abrir menú
  btnMenu.addEventListener("click", () => {
    navMenu.classList.add("show");
  });

  // Cerrar menú
  btnClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });

  // 🔥 Cerrar automáticamente al pasar a PC
  function checkScreenSize() {
    if (window.innerWidth >= 992) {
      navMenu.classList.remove("show");
    }
  }

  window.addEventListener("resize", checkScreenSize);

});