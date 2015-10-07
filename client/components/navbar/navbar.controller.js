'use strict';

angular.module('freightii2App')
  .controller('NavbarCtrl', function ($scope, $location) {
    //Menu option to be controlled from controller
    /*$scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];*/

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
