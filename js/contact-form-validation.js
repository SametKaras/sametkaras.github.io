document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Formun gönderilmesini engeller
    errorMessage.innerText = ""; // Önceki hata mesajlarını temizler

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // İsim alanı boş mu kontrolü
    if (name === "") {
      isValid = false;
      errorMessage.innerText = "Please enter your name.";
    }

    // E-posta kontrolü
    if (email === "") {
      isValid = false;
      errorMessage.innerText += "\nPlease enter your email address.";
    } else if (!validateEmail(email)) {
      isValid = false;
      errorMessage.innerText += "\nPlease enter a valid email address.";
    }

    // Mesaj alanı boş mu kontrolü
    if (message === "") {
      isValid = false;
      errorMessage.innerText += "\nPlease enter your message.";
    }

    if (isValid) {
      // Geçerli ise formu gönderebiliriz veya başarı mesajı gösterebiliriz
      alert("Your message has been sent successfully!");
      form.reset(); // Formu temizler
    }
  });

  // E-posta doğrulama fonksiyonu
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
