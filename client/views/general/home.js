'use strict';

angular.module('myo')
.controller('HomeCtrl', function($scope, $state){

  $scope.welome = function(){
    if($scope.activeUser){
      $state.go('decisions');
    }else{
      $state.go('login');
    }
  };

});
