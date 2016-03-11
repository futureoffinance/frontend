(function() {
  'use strict';

  angular.module('frontend', [
    'ngRoute'
  ])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/pages/login.html',
          controller: 'LoginController',
          controllerAs: 'LoginCtrl'
        })
        .when('/home/:accountId', {
          templateUrl: 'partials/pages/home.html',
          controller: 'HomeController',
          controllerAs: 'HomeCtrl'
        });

      $locationProvider.html5Mode(true);
  }]);

})();
