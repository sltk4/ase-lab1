angular.module('starter.services', [])
.service('LoginService', function($q, $http) {
     function urlMapper(){
  
}
    augment(urlMapper, Mixin);
    var myurls = new urlMapper();
    return {
  loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
        var loginurl = myurls.loginURL();
             $http({
        method: 'GET',
        url: loginurl,
        contentType:"application/json"
        
    }).success(function(data){
      if (name == data.username && pw == data.password) {
          localStorage.setItem("firstname", data.firstname);
          localStorage.setItem("lastname", data.lastname);
          localStorage.setItem("username", data.username);
          localStorage.setItem("password", data.password);
          localStorage.setItem("id", data._id.$oid);
          
                deferred.resolve('Welcome ' + data.username + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
                 
    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
  }
            
        }})
.service('DeleteService', function($q, $http) {
     function urlMapper(){
  
}
    augment(urlMapper, Mixin);
    var myurls = new urlMapper();
    return {
         deleteUser:function(id) {
            var deleteUrl = myurls.deleteURL();
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             
          $http({
              method: 'DELETE' ,   
        url: deleteUrl,
		 
             }).success(function (data) { 
             })
                deferred.resolve('Welcome!');
        promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })


  .service('UpdateService', function($q, $http) {
    return {
        
         updateUser:function(data) {
            var dataString = updateString.getJsonString(data);
            var deferred = $q.defer();
            var promise = deferred.promise; 
             if(dataString!='')
             {
          $http({
              method: 'POST' ,   
        url: 'http://mongoservice.mybluemix.net/rest/update/'+data.username,
		 data: dataString,
		  contentType: "application/json"
             }).success(function (data) { 
             }).error(function(data){
            })
             }
                deferred.resolve('Welcome !');
                 
    
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })


.service('RegisterService', function($q, $http) {
    return {
        RegisterUser: function(fname, lname,username, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
          $http({
        method: 'POST',
        url: 'http://mongoservice.mybluemix.net/rest/signup',
        data: JSON.stringify({
       firstname: fname,
        lastname: lname,
        username: username,
        password: password,
    }),
        contentType:"application/json"
        
    }).success(function(data){
            
              deferred.resolve('Welcome!');
    })
           promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
           
        }
    }
})
;
