'use strict';

cs247App.controller('SelectController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
     $scope.main = {};

     $scope.selectProfile = function(user) {
          $location.path("/profile/" + user);
     };

     // give mentors attributes based on the users attributes

     $scope.mentors = [
        {
            photo: "photo coming soon",
            name: "Amy M.",
            age: $rootScope.main.user.age ? $rootScope.main.user.age : "44",
            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
            additonalSurgeries: $rootScope.main.user.additonalSurgeries ? $rootScope.main.user.additonalSurgeries : "bladder sling",
            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
            hormone: $rootScope.main.user.hormone ? true : false,
        },
        {
            photo: "photo coming soon",
            name: "Shirley F.",
            age: $rootScope.main.user.age ? $rootScope.main.user.age : "30",
            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
            additonalSurgeries: $rootScope.main.user.additonalSurgeries ? $rootScope.main.user.additonalSurgeries : "bladder sling",
            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
            hormone: $rootScope.main.user.hormone ? true : false,
        },
        {
            photo: "photo coming soon",
            name: "Shareen O.",
            age: $rootScope.main.user.age ? $rootScope.main.user.age : "61",
            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
            additonalSurgeries: $rootScope.main.user.additonalSurgeries ? $rootScope.main.user.additonalSurgeries : "bladder sling",
            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
            hormone: $rootScope.main.user.hormone ? true : false,
        },
        {
            photo: "photo coming soon",
            name: "Chang P.",
            age: $rootScope.main.user.age ? $rootScope.main.user.age : "75",
            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
            additonalSurgeries: $rootScope.main.user.additonalSurgeries ? $rootScope.main.user.additonalSurgeries : "bladder sling",
            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
            hormone: $rootScope.main.user.hormone ? true : false,
        },
        {
            photo: "photo coming soon",
            name: "Ruth C.",
            age: $rootScope.main.user.age ? $rootScope.main.user.age : "60",
            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
            additonalSurgeries: $rootScope.main.user.additonalSurgeries ? $rootScope.main.user.additonalSurgeries : "bladder sling",
            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
            hormone: $rootScope.main.user.hormone ? true : false,
        },
        {
            photo: "photo coming soon",
            name: "Lydia R.",
            age: $rootScope.main.user.age ? $rootScope.main.user.age : "55",
            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
            additonalSurgeries: $rootScope.main.user.additonalSurgeries ? $rootScope.main.user.additonalSurgeries : "bladder sling",
            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
            hormone: $rootScope.main.user.hormone ? true : false,
        }
     ];
  }]);
