'use strict';

cs247App.controller('SelectController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = {};

     $scope.selectProfile = function(user) {
          $location.path("/profile/" + user.id);
     };

     $scope.mentors = $rootScope.main.mentors;

     // give mentors attributes based on the users attributes


  }]);
