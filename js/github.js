 var apiKey = require('./../.env').apiKey;

github = function(){
}

github.prototype.getusername = function(name, displayFunct) {
  $.get('https://api.github.com/users/mulatya?access_token=' +  apiKey).then(function(response) {
    console.log(response)
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}
var apiKey = require('./../.env').apiKey;



Repos = function() {

};

Repos.prototype.getUser = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(users) {
    displayFunction(users);
  }).fail(function(error) {
    $('.showUser').text("<h2> " + name + "</h2>" + " is " + error.responseJSON.message + "." +
      "ENTER A VALID USERNAME");
  });
};

Repos.prototype.getRepos = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(repos) {
    displayFunction(repos);
  }).fail(function(error) {
    $('.showUser').text("NO REPOSITORY FOUND FOR" + name + " is " + error.responseJSON.message + "." +
      "ENTER A VALID USERNAME");
  });
};

exports.reposModule = Repos;
