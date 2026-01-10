
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  emailjs.sendForm('service_j76jo4v', 'template_dohgg89', this)
    .then(() => {
      console.log("SUCCESS", res.status, res.text);
      alert("Message Sent Successfully!");
      this.reset(); // clear form
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send message. Please try again.");
    });
});
