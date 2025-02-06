document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameValue = document.getElementById("name").value;
      const emailValue = document.getElementById("email").value;
      const messageValue = document.getElementById("message").value;

      // Simple form submission simulation
      alert(
        `Thank you, ${nameValue}. I will get back to you at ${emailValue} soon!`
      );

      // Reset the form
      contactForm.reset();
    });
  });
