'use strict';

cs247App.controller('LandingController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = {};

     $scope.selectPatientType = function(currPatient) {
          $rootScope.main.user.currPatient = currPatient;
     };

  }]);
