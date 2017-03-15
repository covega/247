'use strict';

cs247App.controller('RegisterController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = {};

     $scope.main.reasons = ['Uterine fibroids', 'Abnormal bleeding', 'Cervical dysplasia',
     'Endometriosis', 'Cancer', 'Pelvic Relaxation'];

     $('.datepicker').pickadate({
          selectMonths: true,
          selectYears: 100          
     });

     $scope.selectHysterectomyType = function(type) {
          console.log(type);
          console.log($rootScope.main.user);
          $rootScope.main.user.surgeryType = type;
     }
  }]);
