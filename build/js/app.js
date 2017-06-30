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

exports.githubModule = github;

},{"./../.env":1}],3:[function(require,module,exports){
var github = require('./../js/github.js').githubModule;

var name = function(name, ) {
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

},{"./../js/github.js":2}]},{},[3]);
