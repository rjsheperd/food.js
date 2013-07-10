'use strict';

angular.module('food.jsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/somewhere', {
        templateUrl: 'views/somewhere.html',
        controller: 'SomewhereCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
