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

    // Close menu if clicking outside
    window.addEventListener("click", function (e) {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu on resize if width > 768px
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        closeMenu();
      }
    });
  });