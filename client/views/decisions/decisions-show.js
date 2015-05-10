'use strict';

angular.module('myo')
.controller('DashboardsCtrl', function($scope, $rootScope){
  $scope.results = $rootScope.user;
});
