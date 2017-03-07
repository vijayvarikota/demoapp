'use strict';

angular.module('myApp.4brand', ['ngRoute','angularFileUpload','wavesurfer.angular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/4brand', {
    templateUrl: 'views/4brand/4brand.html',
    controller: '4brandCtrl'
  });
}])


.controller('4brandCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {


}]);
