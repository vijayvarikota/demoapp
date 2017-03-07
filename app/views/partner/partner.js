'use strict';

angular.module('myApp.partner', ['ngRoute','angularFileUpload','wavesurfer.angular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/partner', {
    templateUrl: 'views/partner/partner.html',
    controller: 'partnerCtrl'
  });
}])


.controller('partnerCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {


}]);
