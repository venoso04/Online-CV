document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }


  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;


  const form = this;

  emailjs.sendForm('service_j76jo4v', 'template_dohgg89', form)
    .then((res) => {
      console.log("SUCCESS", res.status);
      alert("Message Sent Successfully!");
      form.reset(); // clear form
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Failed to send message. Please try again.");
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
});