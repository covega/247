'use strict';

cs247App.controller('RegisterController', ['$scope',
  function ($scope) {
    /*
     *
     */
     $scope.main = {};
     $scope.main.user = {};

     $scope.step = 0;

     $scope.progressFromStart = function(currPatient) {
          $scope.main.user.currPatient = currPatient;
          $scope.step++;
     };

     $scope.progressFromAge = function(maxAge) {
          $scope.main.user.maxAge =  maxAge;
          $scope.step++;
     };

     $scope.progressFromType = function(type) {
          //$scope.main.user.surgeryType =  type;
          $scope.step++;
     };     

     $scope.progressFromAdditionalSurgeries = function(surgeries) {
          $scope.step++;
     };    

     $scope.progressFromRecovery = function(recoveryPeriod) {          
          $scope.step++;
     };    

     $scope.progressFromHormone = function(hormone) {          
          $scope.step++;
     };             

     /* assemble a json object with each click */
  }]);
