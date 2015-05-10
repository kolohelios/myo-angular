'use strict';

angular.module('myo')
.controller('DashboardsCtrl', function($scope, $rootScope, $state){
  $scope.decision = $rootScope.user;
});
