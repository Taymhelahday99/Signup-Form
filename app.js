document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

 
  const firstnameError = document.getElementById("firstnameError");
  const lastnameError = document.getElementById("lastnameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear error messages
    firstnameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // validations
    let isValid = true;

   
    if (firstname.length <= 3) {
      firstnameError.textContent = "First Name must be more than 3 characters.";
      isValid = false;
    }

    if (lastname.length <= 3) {
      lastnameError.textContent = "Last Name must be more than 3 characters.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }

    const passwordRegex = /^(?=.*\d)[A-Za-z\d]{7,}$/;
    if (!passwordRegex.test(password)) {
      passwordError.textContent = "Password must be at least 7 characters and include a digit.";
      isValid = false;
    }

    // submit the form
    if (isValid) {
      alert('Form Submitted successfully!')
    }
  });
});
