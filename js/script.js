document.addEventListener("DOMContentLoaded", () => {
    // 1. Contact Form Submission
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

    // 2. Download Resume Button
    const downloadBtn = document.getElementById("downloadResumeBtn");
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Create an <a> element, set the download attribute, and trigger click
      const resumeLink = document.createElement("a");
      resumeLink.href = "files/ben.pdf";   // Path to your PDF
      resumeLink.download = "benjamin_resume.pdf";     // Name of the downloaded file
      document.body.appendChild(resumeLink);
      resumeLink.click();
      document.body.removeChild(resumeLink);
    });
  });
