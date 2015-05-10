'use strict';

angular.module('myo')
.controller('DashboardsCtrl', function($scope, $rootScope){
  $scope.decision = $rootScope.user;
});
