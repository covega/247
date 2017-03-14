'use strict';

var cs247App = angular.module('cs247App', ['ngRoute']);

cs247App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/chat', {
                templateUrl: 'components/chat/chatTemplate.html',
                controller: 'ChatController'
            }).
            when('/landing', {
                templateUrl: 'components/landing/landingTemplate.html',
                controller: 'LandingController'
            }).              
            when('/profile/:userId', {
                templateUrl: 'components/profile/profileTemplate.html',
                controller: 'ProfileController'
            }).
            when('/profile-creation', {
                templateUrl: 'components/profile-creation/profile-creationTemplate.html',
                controller: 'Profile-CreationController'
            }).
            when('/register', {
                templateUrl: 'components/register/registerTemplate.html',
                controller: 'RegisterController'
            }).
            when('/select', {
                templateUrl: 'components/select/selectTemplate.html',
                controller: 'SelectController'
            }).  
            otherwise({
                redirectTo: '/landing'
            });
    }]);

cs247App.controller('MainController', ['$scope', '$rootScope', '$location',
  function ($scope, $rootScope, $location) {
        $rootScope.main = {};
        $rootScope.main.user = {};

}]);


