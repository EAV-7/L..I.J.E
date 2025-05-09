document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const requiredFields = form.querySelectorAll("input[required], textarea[required]");
  
    requiredFields.forEach(field => {
      // the fuhahh message
      const errorSpan = document.createElement("span");
      errorSpan.className = "error-message";
      errorSpan.textContent = "This field is required";
      errorSpan.style.display = "none";
      field.insertAdjacentElement("afterend", errorSpan);
  
      // dingsta error kai pradeti input
      field.addEventListener("input", () => {
        errorSpan.style.display = "none";
        field.style.borderColor = "";
        field.setCustomValidity("");
      });
  
      // validity
      field.addEventListener("invalid", (e) => {
        e.preventDefault();
        field.setCustomValidity("");
  
        if (!field.value.trim()) {
          errorSpan.style.display = "block";
          field.style.borderColor = "red";
          field.setCustomValidity("This field is required");
        }
      });
    });
  
    // neleidiza submit jei tuscia
    form.addEventListener("submit", function (e) {
      let formIsValid = true;
  
      requiredFields.forEach(field => {
        const errorSpan = field.nextElementSibling;
  
        if (!field.value.trim()) {
          errorSpan.style.display = "block";
          field.style.borderColor = "red";
          field.setCustomValidity("This field is required");
          formIsValid = false;
        } else {
          errorSpan.style.display = "none";
          field.style.borderColor = "";
          field.setCustomValidity("");
        }
      });
  
      if (!formIsValid) {
        e.preventDefault();
      }
    });
  });
  