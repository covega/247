'use strict';

cs247App.controller('SelectController', ['$scope', '$location',
  function ($scope, $location) {
    /*
     *
     */
     $scope.main = {};

     $scope.selectProfile = function(user) {
          $location.path("/profile/" + user);
     };             
  }]);
