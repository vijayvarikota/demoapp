'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularFileUpload',
  'myApp.view1',
  'myApp.home',
  'myApp.product',
  'myApp.partner',
  'myApp.4brand',
  'myApp.upload',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
