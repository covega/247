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
        $rootScope.main.user = {
        	id: 100,
        };

        $rootScope.main.mentors = [
	        {
	            id: 1,
	            photo: "images/image1.jpg",
	            name: "Amy M.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "44",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '07",
	            bio: "I'm a real estate broker and mom of 4. Talk to me if you want to know how to recover while juggling a career and a family!",
	        },
	        {
	            id: 2,
	            photo: "images/image2.jpg",
	            name: "Shirley F.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "30",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "May '14",
	            bio: "I'm a real estate broker and mom of 4. Talk to me if you want to know how to recover while juggling a career and a family!",
	        },
	        {
	            id: 3,
	            photo: "images/image3.jpg",
	            name: "Shareen O.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "61",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "April '05",
	            bio: "I'm a real estate broker and mom of 4. Talk to me if you want to know how to recover while juggling a career and a family!",
	        },
	        {
	            id: 4,
	            photo: "images/image4.jpg",
	            name: "Chang P.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "75",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "December '98",
	            bio: "I'm a real estate broker and mom of 4. Talk to me if you want to know how to recover while juggling a career and a family!",
	        },
	        {
	            id: 5,
	            photo: "images/image5.jpg",
	            name: "Ruth C.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "60",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "June '16",
	            bio: "I'm a real estate broker and mom of 4. Talk to me if you want to know how to recover while juggling a career and a family!",
	        },
	        {
	            id: 6,
	            photo: "images/image6.jpg",
	            name: "Lydia R.",
	            age: $rootScope.main.user.age ? $rootScope.main.user.age : "55",
	            type: $rootScope.main.user.surgeryType ? $rootScope.main.user.surgeryType : "total",
	            additionalSurgeries: $rootScope.main.user.additionalSurgeries ? $rootScope.main.user.additionalSurgeries : "bladder sling",
	            recoveryPeriod: $rootScope.main.user.recoveryPeriod ? $rootScope.main.user.recoveryPeriod : "3 months",
	            hormone: $rootScope.main.user.hormone ? true : false,
	            date: "January '17",
	            bio: "I'm a real estate broker and mom of 4. Talk to me if you want to know how to recover while juggling a career and a family!",
	        }
     	];

     	$scope.goto = function (page) {
     		if(page === "chat"){
     			if($scope.main.user.mentorId) {
     				page = "/chat/" + ($scope.main.user.mentorId);
     			} else {
     				page = "/select/"
     			}
     		}
     		$location.path(page);
     	}

}]);


