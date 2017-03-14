'use strict';

cs247App.controller('ProfileController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */    
    $scope.main = {};

    $scope.profile = {
      id: 1,
      name: "Amy",
      age: "44",
      labels: ['pelvic relaxation', 'childbirth'],
      date: "5",
      description: "I'm a real estate broker and mom of four. Talk to me if you\
      want to know how to recover while juggling a career and a family",
    };

    $scope.chat = function() {
      $location.path("/chat/" + $scope.profile.id);
    }
  }]);
