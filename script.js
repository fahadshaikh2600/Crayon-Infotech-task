document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("interestForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const fields = form.querySelectorAll(
      "input[required]:not(#agree), select[required]"
    );

    fields.forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add("is-invalid");
        isValid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });

    const phone = document.getElementById("phone");
    const phoneRegex = /^[6-9]\d{9}$/;

    if (phone.value.trim() && !phoneRegex.test(phone.value.trim())) {
      phone.classList.add("is-invalid");
      isValid = false;
    } else {
      phone.classList.remove("is-invalid");
    }

    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() && !emailRegex.test(email.value.trim())) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    const agree = document.getElementById("agree");
    const agreeError = document.getElementById("agreeError");

    if (!agree.checked) {
      agreeError.style.display = "block";
      isValid = false;
    } else {
      agreeError.style.display = "none";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  const inputs = form.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.classList.remove("is-invalid");
    });
  });

  const agree = document.getElementById("agree");
  const agreeError = document.getElementById("agreeError");

  agree.addEventListener("change", function () {
    agreeError.style.display = "none";
  });
});
