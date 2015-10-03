angular.module('starter.controllers', [])


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
