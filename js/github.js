// var apiKey = require('./../.env').apiKey;
var token = 

github = function(){
}

github.prototype.getusername = function() {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response) {
    console.log(response)
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}

exports.githubModule = github;
