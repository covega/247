'use strict';

cs247App.controller('ProfileController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = {}

     var path = $location.path();
     var id = parseInt(path.substring(path.length-1));
     $scope.userDetails = $rootScope.main.mentors[id-1];

     console.log($scope.userDetails);
     $scope.chat = function(id) {
        $location.path("/chat/" + id);
     };
  }]);
