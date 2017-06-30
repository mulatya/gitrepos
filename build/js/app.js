(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b668489d8f8cd0001dd45cc141b84a8766226719";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/github.js":2}]},{},[3]);
