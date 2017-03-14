'use strict';

cs247App.controller('RegisterController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = {};

     $scope.step = 0;

     $scope.progressFromStart = function(currPatient) {
          $rootScope.main.user.currPatient = currPatient;
          $scope.step++;
     };

     $scope.progressFromAge = function(maxAge) {
          $rootScope.main.user.maxAge =  maxAge;
          $scope.step++;
     };

     $scope.progressFromType = function(type) {
          //$rootScope.main.user.surgeryType =  type;
          $scope.step++;
     };     

     $scope.progressFromAdditionalSurgeries = function(surgeries) {
          //$rootScope.main.user.additionalSurgeries =  surgeries;
          $scope.step++;
     };    

     $scope.progressFromRecovery = function(recoveryPeriod) {
          //$rootScope.main.user.recoveryPeriod = recoveryPeriod;
          $scope.step++;
     };    

     $scope.progressFromHormone = function(hormone) {        
          //$rootScope.main.user.hormone = hormone;  
          $scope.step++;
          $location.path("/select");
     };             
  }]);
