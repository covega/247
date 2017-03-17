'use strict';

cs247App.controller('ChatController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
   $scope.main = $rootScope.main;

   $scope.mentors = $rootScope.main.mentors;

    var path = $location.path();
    var id = parseInt(path.substring(path.length-1));
    $scope.partner = $rootScope.main.mentors[id-1];

    $scope.notes = [];

    $scope.messages = [
      {
        text:'hey! I have so many questions! Can you help?', 
        sender: 'user'
      },
      {
        text: 'Im here to help!',
        sender: 'partner'
      }
    ];
    
    $scope.sendViaClick = function() {
      var msg = $('#chatbox').val();
      //var timeStamp = "<span class='time'><i>Delivered: " +  new Date().toLocaleString() + "</i></span>"
      //$('#messages').append($("<li class ='user'><p>" + msg + timeStamp + "</p><br/></li>"));      
      $('#messages').append($("<li class ='user'><p>" + msg + "</p><br/></li>"));      
      $('#chatbox').val("");
      console.log(msg);
    }

    $scope.sendViaEnter = function(event) {
      if (event.which === 13){
        var msg = $('#chatbox').val();
        //var timeStamp = "<span class='time'><i>Delivered: " +  new Date().toLocaleString() + "</i></span>"
        //$('#messages').append($("<li class ='user'><p>" + msg + timeStamp + "</p><br/></li>"));      
        $scope.messages.push({
          text: msg,
          sender: 'user'
        });
        $('#chatbox').val("");
        console.log(msg);
      }
    }

    $scope.saveNote = function(event) {
      var msg = $(event.target.parentNode).children()[0].innerHTML
      console.log(msg);
      $scope.notes.push(msg);
    }


  }]);
