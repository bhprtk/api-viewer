'use strict';

var app = angular.module('pokeApp', ['ui.router']);

app.filter('titlecase', function() {
  return function(input, joiner) {
    if(!input) return;

    return input.toLowerCase().split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(joiner || ' ');
  };
});


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('list', {
      url: '/list/:min',
      templateUrl: '/html/list.html',
      controller: 'listCtrl'
    })
    .state('detail', {
      url: '/detail/:id',
      templateUrl: 'html/detail.html',
      controller: 'detailCtrl'
    });

    $urlRouterProvider.otherwise('/home');
});
