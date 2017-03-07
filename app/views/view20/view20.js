'use strict';

angular.module('myApp.view20', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view20', {
    templateUrl: 'view20/view20.html',
    controller: 'View20Ctrl'
  });
}])

.controller('View20Ctrl', [function() {

}]);
