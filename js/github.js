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

exports.githubModule = github;
