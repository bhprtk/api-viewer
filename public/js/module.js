'use strict';

var app = angular.module('pokeApp', ['ui.router']);

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

    $urlRouterProvider.otherwise('/');
});
