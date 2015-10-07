'use strict';

angular.module('freightii2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'app/forgot/forgot.html',
        controller: 'ForgotCtrl'
      });
  });