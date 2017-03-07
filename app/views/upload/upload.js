'use strict';

angular.module('myApp.upload', ['ngRoute','angularFileUpload','wavesurfer.angular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload', {
    templateUrl: 'views/upload/upload.html',
    controller: 'UploadCtrl'
  });
}])


.controller('UploadCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {


  $scope.options = {
      waveColor      : '#c5c1be',
      progressColor  : '#2A9FD6',
      normalize      : true,
      hideScrollbar  : true,
      skipLength     : 15,
      height         : 53,
      cursorColor    : '#2A9FD6'
  };

  $scope.url = 'example.mp3';
   var uploader = $scope.uploader = new FileUploader({
       url: 'upload.php'
   });

   // FILTERS
   uploader.filters.push({
           name: 'imageFilter',
           fn: function(item /*{File|FileLikeObject}*/, options) {
               var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
               return '|mp3|mp4|wav|'.indexOf(type) !== -1;
           }
       });



   // CALLBACKS

   uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
       console.info('onWhenAddingFileFailed', item, filter, options);
   };
   uploader.onAfterAddingFile = function(fileItem) {
       console.info('onAfterAddingFile', fileItem);
       
   };
   uploader.onAfterAddingAll = function(addedFileItems) {
       console.info('onAfterAddingAll', addedFileItems);
   };
   uploader.onBeforeUploadItem = function(item) {
       console.info('onBeforeUploadItem', item);
   };
   uploader.onProgressItem = function(fileItem, progress) {
       console.info('onProgressItem', fileItem, progress);
   };
   uploader.onProgressAll = function(progress) {
       console.info('onProgressAll', progress);
   };
   uploader.onSuccessItem = function(fileItem, response, status, headers) {
       console.info('onSuccessItem', fileItem, response, status, headers);
   };
   uploader.onErrorItem = function(fileItem, response, status, headers) {
       console.info('onErrorItem', fileItem, response, status, headers);
   };
   uploader.onCancelItem = function(fileItem, response, status, headers) {
       console.info('onCancelItem', fileItem, response, status, headers);
   };
   uploader.onCompleteItem = function(fileItem, response, status, headers) {
       console.info('onCompleteItem', fileItem, response, status, headers);
   };
   uploader.onCompleteAll = function() {
       console.info('onCompleteAll');
   };

   console.info('uploader', uploader);
}]);
