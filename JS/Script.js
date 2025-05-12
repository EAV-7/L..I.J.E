document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("closeBtn");

    function openMenu() {
      mobileMenu.classList.add("open");
      hamburger.style.display = "none";
    }

    function closeMenu() {
      mobileMenu.classList.remove("open");
      hamburger.style.display = "block";
    }

    hamburger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        closeMenu();
      }
    });
  });