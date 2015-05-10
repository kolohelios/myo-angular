'use strict';



angular.module('myo')
.controller('DecisionsCtrl', function($rootScope, $scope, $state, User){

  $scope.choose = function(side){
    if (side === 'right'){
      userChoices.push($scope.right);
      getChoices('food');
    }else{
      userChoices.push($scope.left);
      getChoices('food');
    }
    checkResults();
  };

  var choices = {
    foods: {
      good: ['salad', 'grilledChicken', 'fish', 'vegetables'],
      bad: ['innNout', 'macAndCheese', 'iceCream', 'chimichangas']
    }
  };

  var choiceInfo = {
    salad: {
      url: '/assets/salad.jpg',
      name: 'Salad',
      disposition: 'good'
    },
    grilledChicken: {
      url: '/assets/grilled-chicken.jpg',
      name: 'Grilled Chicken',
      disposition: 'good'
    },
    fish: {
      url: '/assets/salmon.jpg',
      name: 'Salmon',
      disposition: 'good'
    },
    vegetables: {
      url: '/assets/vegetables.jpg',
      name: 'Vegetables',
      disposition: 'good'
    },
    innNout: {
      url: '/assets/inn-n-out.jpg',
      name: 'Inn n Out',
      disposition: 'bad'
    },
    macAndCheese: {
      url: '/assets/mac-and-cheese.jpg',
      name: 'Mac and Cheese',
      disposition: 'bad'
    },
    iceCream: {
      url: '/assets/ice-cream.jpg',
      name: 'Ice Cream',
      disposition: 'bad'
    },
    chimichangas: {
      url: '/assets/chimichangas.jpg',
      name: 'Chimichangas',
      disposition: 'bad'
    }
  };

  getChoices('food');

  function getChoices(category){
    switch (category){
      case 'food':
        showChoices(choices.foods);
    }
  }

  function showChoices(options){
    var rand = Math.ceil(Math.random() * 2);
    var len = options.good.length;
    var indexA = Math.ceil(Math.random() * len) -1;
    var indexB = Math.ceil(Math.random() * len) -1;

    if(rand % 2){
      $scope.left = choiceInfo[options.good[indexA]];
      $scope.right = choiceInfo[options.bad[indexB]];
    }else{
      $scope.left = choiceInfo[options.good[indexB]];
      $scope.right = choiceInfo[options.bad[indexA]];
    }
  }

  var userChoices = [];

  function checkResults(){
    console.log(userChoices.length);
    if(userChoices.length === choices.foods.good.length + 1){
      var good = 0, bad = 0;
      userChoices.forEach(function(object){
        if(object.disposition === 'good'){
          good++;
        }
        else{
          bad++;
        }
      });
      if(good > bad){
        userChoices.decision = 'healthy food';
      }else{
        userChoices.decision = 'comfort food';
      }
      $rootScope.user = userChoices;

      $state.go('dashboards');
    }
  }

});
