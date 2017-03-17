'use strict';

cs247App.controller('RegisterController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = $rootScope.main;

     $scope.main.reasons = ['Uterine fibroids', 'Abnormal bleeding', 'Cervical dysplasia',
     'Endometriosis', 'Cancer', 'Pelvic Relaxation'];

     $('.datepicker').pickadate({
          selectMonths: true,
          selectYears: 100          
     });

     $scope.selectHysterectomyType = function(type) {
          $rootScope.main.user.surgeryType = type;
     };
  }]);
