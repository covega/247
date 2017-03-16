'use strict';

var cs247App = angular.module('cs247App', ['ngRoute']);

cs247App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/chat/:userId', {
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

        /* fields: 
        * type: string
        * reason: string
        * date: date
        * additionalSurgeries: list of strings
        * recoveryPeriod: string // x days, months, etc
        * hormone: bool // whether or not they've had hormone replacement
        */
        $rootScope.main.user = {};

        $rootScope.main.mentors = [
	        {
	            id: 1,
	            photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140929110109-michelle-kosinski-profile-image1-large-tease.jpg",
	            name: "Amy M.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "44",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '17",
	        },
	        {
	            id: 2,
	            photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140929110109-michelle-kosinski-profile-image1-large-tease.jpg",
	            name: "Shirley F.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "30",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '17",
	        },
	        {
	            id: 3,
	            photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140929110109-michelle-kosinski-profile-image1-large-tease.jpg",
	            name: "Shareen O.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "61",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '17",
	        },
	        {
	            id: 4,
	            photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140929110109-michelle-kosinski-profile-image1-large-tease.jpg",
	            name: "Chang P.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "75",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '17",
	        },
	        {
	            id: 5,
	            photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140929110109-michelle-kosinski-profile-image1-large-tease.jpg",
	            name: "Ruth C.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "60",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '17",
	        },
	        {
	            id: 6,
	            photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140929110109-michelle-kosinski-profile-image1-large-tease.jpg",
	            name: "Lydia R.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "55",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '17",
	        }
     	];

}]);


