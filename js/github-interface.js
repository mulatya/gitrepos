var Repos = require('./../js/github.js').reposModule;


var displayUser = function(user) {
  // users.forEach(function(user) {
  $('ul#userPic').empty();
  $('ul#userPic').append("<li>" + user.name + "</li > ");
  // });
};


var displayData = function(repos) {
  $('ul#repoUrl').empty();
  repos.forEach(function(repo) {
    $('ul#repoUrl').append("<li><a href='" + repo.html_url + "'>" + repo.name + "</a>: " + repo.description + "; created on " + repo.created_at + "</li > ");
  });
};


$(document).ready(function() {
  var searchUsers = new Repos();
  $('#searchName').click(function() {
    //get input value
    var name = $('#userName').val();
    // $('#userPic').val("");
    console.log(name);
    searchUsers.getUser(name, displayUser);
    searchUsers.getRepos(name, displayData);
  });
});
