function SendMail() {
  var params = {
    msg: document.getElementById("msg").value
  };
  
  var button = document.querySelector(".buttonhold");
  
  if (button.style.display === "none") {
    alert("Button is disabled. Please enter a message.");
    return;
  }
  
  emailjs.send("service_l7zz052", "template_fyqgure", params)
    .then(function () {
      alert("Sent!");
      clearFields();
    })
    .catch(function (error) {
      alert("Failed to send");
      clearFields();
    });
}

function clearFields() {
  document.getElementById("msg").value = "";
  toggleButton();
}

function toggleButton() {
  var textarea = document.getElementById("msg");
  var button = document.querySelector(".buttonhold");
  
  if (textarea.value.trim() === "") {
      button.style.display = "none";
  } else {
      button.style.display = "inline-block";
  }
}

window.onload = function() {
  toggleButton();
  document.getElementById("msg").addEventListener("input", toggleButton);
};