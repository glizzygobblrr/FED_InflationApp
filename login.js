document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c23ef9514d396e7b5fd82c";
    document.getElementById("add-update-msg").style.display = "none";
  
    document.getElementById("contact-submit").addEventListener("click", function (e) {
      e.preventDefault();
  
      let contactName = document.getElementById("contact-name").value;
      let contactNumber = document.getElementById("contact-number").value;
      let contactEmail = document.getElementById("contact-email").value;
      let contactPassword = document.getElementById("contact-password").value;
  
      let jsondata = {
        "Name": contactName,
        "Contact": contactNumber,
        "Email": contactEmail,
        "Password": contactPassword
      };
  
      let settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
        beforeSend: function () {
          document.getElementById("contact-submit").disabled = true;
          document.getElementById("add-contact-form").reset();
        }
      };
  
      fetch("https://student-9661.restdb.io/rest/account", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById("contact-submit").disabled = false;
          document.getElementById("add-update-msg").style.display = "block";
          setTimeout(function () {
            document.getElementById("add-update-msg").style.display = "none";
          }, 3000);
        });
    });
  
    const registerLink = document.getElementById("register");
    if (registerLink) {
      registerLink.addEventListener("click", function (event){
        event.preventDefault();
        document.getElementById("sign-in-title").innerText = "Sign Up"; 
      });
    }
  });