'use strict';

var app = angular.module('pokeApp');

app.service('Pokemon', function($http) {

  this.getAll = () => {
    return $http({
      url: 'http://pokeapi.co/api/v2/pokedex/1/',
      method: 'GET'
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  this.getOne = id => {
    return $http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
  };


});
