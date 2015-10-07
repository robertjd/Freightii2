'use strict';

angular.module('freightii2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reset', {
        url: '/reset?sptoken',
        templateUrl: 'app/reset/reset.html',
        controller: 'ResetCtrl'
      });
  });
