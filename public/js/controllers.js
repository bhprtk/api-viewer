'use strict';

var app = angular.module('pokeApp');

app.controller('listCtrl', function($scope, $http, $stateParams, Pokemon) {
  console.log('params:', $stateParams.min);
  Pokemon.getAll()
    .then(res => {
      $scope.pokeList = res.data.pokemon_entries;

      $scope.num = [1, 2, 3, 4, 5, 6, 7];
      console.log($scope.num);
    });
    $scope.page = (n) => {
      var min = n * 10;
      var max = (n+1) * 10;
      console.log(max);
      var pokeList = $scope.pokeList;
      $scope.pokeList = pokeList.filter(p => p.entry_number < max && p.entry_number > min);
    };
  });

app.controller('detailCtrl', function($scope, $stateParams, Pokemon) {
  Pokemon.getOne($stateParams.id)
    .then(res => {
      $scope.pokeName = res.data.name;
      $scope.pokeType = [];
      res.data.types.forEach(typeNo => {
        $scope.pokeType.push(typeNo.type.name);
      });
      $scope.pokeSprite = res.data.sprites.front_default;
      $scope.abilities = [];
      res.data.abilities.forEach(ability => {
        $scope.abilities.push(ability.ability.name);
      });
      $scope.pokeHeight = res.data.height;
      $scope.pokeWeight = res.data.weight;
    });
});

app.controller('homeCtrl', function() {
  console.log('home');
});
