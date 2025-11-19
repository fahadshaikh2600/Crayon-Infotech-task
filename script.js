document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("interestForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const requiredFields = form.querySelectorAll("[required]");
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add("is-invalid");
        isValid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });

    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^[6-9]\d{9}$/;
    if (phone && !phoneRegex.test(phone)) {
      document.getElementById("phone").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("phone").classList.remove("is-invalid");
    }

    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      document.getElementById("email").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("is-invalid");
    }

    const agree = document.getElementById("agree");
    if (!agree.checked) {
      agree.classList.add("is-invalid");
      isValid = false;
    } else {
      agree.classList.remove("is-invalid");
    }

    if (isValid) {
      alert("Form submitted successfully! Thanks for your interest.");
      form.reset();
    } else {
      alert("Please fix errors before submitting.");
    }
  });

  const inputs = form.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.classList.remove("is-invalid");
    });
  });
});
