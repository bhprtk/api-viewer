'use strict';

var app = angular.module('pokeApp');

app.controller('listCtrl', function($scope, $http, $stateParams, Pokemon) {
  var nArr = [];
  for(var n = 1; n < 30; n++) {
    nArr.push(n);
    $scope.num = nArr;
  }
  $scope.listLoading = true;
  Pokemon.getAll()
    .then(res => {
      $scope.pokeList = res.data.pokemon_entries;
      $scope.storePokeList = res.data.pokemon_entries;
      $scope.listLoading = false;
    });
    $scope.page = (n) => {
      $scope.pokeList = $scope.storePokeList.filter(p => p.entry_number < (((n-1)*25+1) + 25) && p.entry_number >= ((n-1)*25+1));
    };

  });

app.controller('detailCtrl', function($scope, $stateParams, $interval, Pokemon) {
  $scope.loading = true;
  $scope.imageLoading = true;
  Pokemon.getOne($stateParams.id)
    .then(res => {
      $scope.pokeName = res.data.name;
      $scope.pokeType = [];
      res.data.types.forEach(typeNo => {
        $scope.pokeType.push(typeNo.type.name);
      });
      $scope.loading = false;
      var sprites = res.data.sprites;
      var keys = Object.keys(sprites);
      var numSprites = keys.length;

      var count = 0;
      $interval(function() {
        count++;
        var index = count % numSprites;
        var spriteUrl = sprites[keys[index]];
        $scope.pokeSprite = spriteUrl;
        $scope.imageLoading = false;
      }, 3000);

      $scope.abilities = [];
      res.data.abilities.forEach(ability => {
        $scope.abilities.push(ability.ability.name);
      });
      $scope.pokeHeight = res.data.height;
      $scope.pokeWeight = res.data.weight;

      $scope.appliedClass = function(type) {
        if (type === "grass") {
            return "label label-success";
        } else if(type === "poison"){
            return "label label-poison"; // Or even "", which won't add any additional classes to the element
        } else if (type === "water") {
            return "label label-info";
        } else if (type === "flying") {
            return "label label-primary";
        } else if(type === "rock") {
            return "label label-default";
        } else if(type === "normal") {
            return "label label-normal";
        }  else if(type === "fairy") {
            return "label label-fairy";
        } else if(type === "fire") {
            return "label label-warning";
        } else if(type === "fight") {
            return "label label-danger";
        } else if(type === "ground") {
            return "label label-ground";
        } else if(type === "bug") {
            return "label label-success";
        } else if(type === "ghost") {
            return "label label-primary";
        } else {
            return "label label-warning";
        }
    };
});
});

app.controller('homeCtrl', function() {
  console.log('home');
});
