'use strict';

angular.module('myApp.product', ['ngRoute','angularFileUpload','wavesurfer.angular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product', {
    templateUrl: 'views/product/product.html',
    controller: 'productCtrl'
  });
}])


.controller('productCtrl', ['$scope', '$http' , 'FileUploader', function($scope,$http, FileUploader) {
  $scope.name = 'vijay';
  $scope.arr = [1,2,3,4,5];


    $http.get("http://rest-service.guides.spring.io/greeting")
    .then(function(response) {
        $scope.myWelcome = response.data;
        console.log(response.data);
    });


}]);
