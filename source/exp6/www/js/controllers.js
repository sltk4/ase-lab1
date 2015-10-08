angular.module('starter.controllers', ['ngCordova'])


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
    
    $scope.validateusername = function (username) {
            
                if(username.length < 0){
                return false;}else return true;                
            
        }
    
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('viewCtrl',function($scope, $ionicPopup, $state, $cordovaCalendar){
 $scope.data = {};
    $scope.d1= function(){
$cordovaCalendar.createEventInteractively({
    title: 'Schedule Appointment ',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });
      //  $state.go('appointment');

}    
})


.controller('confappointment',function($scope, $ionicPopup, $state){
 $scope.data = {};
    
})


.controller('SearchCtrl', function($scope, $ionicPopup, $state) {
     $scope.data = {};
    $scope.view = function (mySelect) {
      var a=mySelect;
      alert(a);
       if( a != null)
       {
            $state.go('view');
           return true;
           
          
       }
       else
       {
           
            alert("Please select an option");
           return false;
       }
}
   $scope.showSelectValue = function(mySelect) {
    alert(mySelect);
}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
