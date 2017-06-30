var github = require('./../js/github.js').githubModule;

var displayUsername = function(city, humidityData) {
  $('.git').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var usernameObject = new github();
  $('#username').click(function() {
    var city = $('#location').val();
    $('#location').val("");
usernameObject.getusername(city, displayUsername);
  });
});
