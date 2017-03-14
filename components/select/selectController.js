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

     // give mentors attributes based on the users attributes

     $scope.mentors = []
     for(var i = 0; i < 6; i++){
     	$scope.mentors.push({
     		photo: "photo coming soon",
     		name: "Amy M.",
     		age: "44",
     		type: "total",
     		additonalSurgeries: "bladder sling",
     		recoveryPeriod: "forever",
     		hormone: "yes"
     	});
     }
  }]);
