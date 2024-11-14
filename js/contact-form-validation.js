document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.innerText = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    if (name === "") {
      isValid = false;
      errorMessage.innerText = "Lütfen isminizi giriniz.";
    }

    if (email === "") {
      isValid = false;
      errorMessage.innerText += "\nLütfen emailinizi giriniz.";
    } else if (!validateEmail(email)) {
      isValid = false;
      errorMessage.innerText += "\nLütfen geçerli email giriniz. ";
    }

    if (message === "") {
      isValid = false;
      errorMessage.innerText += "\nLütfen mesajınızı giriniz.";
    }

    if (isValid) {
      alert("Mesajınız başarıyla gönderildi.");
      form.reset();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
