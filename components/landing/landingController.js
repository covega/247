'use strict';

cs247App.controller('LandingController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = {};

     $scope.selectPatientType = function(currPatient) {
        console.log($rootScope.main.user);
        $rootScope.main.user.currPatient = currPatient;
        console.log($rootScope.main.user);
        $location.path("/select/");
     };

  }]);
