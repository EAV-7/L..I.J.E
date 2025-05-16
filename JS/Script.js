document.getElementById("hamburger").onclick = () => {
    document.getElementById("mobileMenu").classList.add("open");
    document.getElementById("hamburger").style.display = "none";
  };

  document.getElementById("closeBtn").onclick = () => {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("hamburger").style.display = "block";
  };