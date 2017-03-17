'use strict';

cs247App.controller('ChatController', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    /*
     *
     */
   $scope.main = $rootScope.main;

   $scope.mentors = $rootScope.main.mentors;

   $scope.suggestions = ["What should I be eating?", "Are there resources you'd recommend?", "What do you wish you knew?"];

   $scope.stickers = ["http://www.stickermotions.com/wp-content/uploads/2014/12/2812144885022352431.png", "http://www.stickermotions.com/wp-content/uploads/2014/12/2812144884925685774.png", "http://www.stickersort.com/wp-content/uploads/2014/12/669Sortlist-Facebook-Stickers.png", "http://www.stickersort.com/wp-content/uploads/2014/12/671Sortlist-Facebook-Stickers.png", "https://s-media-cache-ak0.pinimg.com/564x/cd/de/75/cdde758c30c75db094ef748a15883367.jpg"];

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
      var msg = $($(event.target.parentNode).parent().children()[0]).children()[0].innerHTML;    
      console.log(msg);
      $scope.notes.push(msg);
    }


  }]);
