'use strict';

angular.module('food.jsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.reservations = [
        {
            'name': 'Harlold',
            'number': '555',
            'email': 'harold@gmail',
            'date': 'Tues',
            'time': '4'
        },
        {
            'name': 'Josh',
            'number': '234',
            'email': 'spidey@gmail',
            'date': 'Wed',
            'time': '5'
        },
        {
            'name': 'Mary',
            'number': '593',
            'email': 'mary@facebook',
            'date': 'Tues',
            'time': '1'
        }
        
    ];
  });
