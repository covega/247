'use strict';

cs247App.controller('ProfileController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = $rootScope.main;

     var path = $location.path();
     var id = parseInt(path.substring(path.length-1));
     if (id <= 6) {
        $scope.userDetails = $rootScope.main.mentors[id-1];
     } else {
        $scope.userDetails = $rootScope.main.user;
     }


     console.log($scope.userDetails);
     $scope.chat = function(id) {
        $location.path("/chat/" + id);
     };

     $scope.profileCreation = function() {
        $location.path("/register/");
     }     
  }]);
