angular.module('starter.services', [])
.service('LoginService', function($q, $http) {
    return {
  loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'http://sarathservice.mybluemix.net/rest/login/'+name,
        contentType:"application/json"
        
    }).success(function(data){
         localStorage.setItem("firstname", data.firstname);
          localStorage.setItem("lastname", data.lastname);
          localStorage.setItem("username", data.username);
          localStorage.setItem("password", data.password);
          localStorage.setItem("id", data._id.$oid);
      if (name == data.username && pw == data.password) {
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
    }
})

.service('DeleteService', function($q, $http) {
    return {
        
         deleteUser:function(id) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            
          $http({
              method: 'DELETE' ,   
        url: 'http://sarathservice.mybluemix.net/rest/delete/'+id,
		 
             }).success(function (data) { 
             alert(1);
             })
                deferred.resolve('Welcome');
            
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
        
         updateUser:function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
          $http({
              method: 'POST' ,   
        url: 'http://sarathservice.mybluemix.net/rest/update/'+name,
		 data: JSON.stringify( { "$set" : { "password" : pw } } ),
		 
		  contentType: "application/json"
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



.service('RegisterService', function($q, $http) {
    return {
        RegisterUser: function(fname, lname, address, age, email, username, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
          $http({
        method: 'POST',
        url: 'http://sarathservice.mybluemix.net/rest/signup',
        data: JSON.stringify({
       firstname: fname,
        lastname: lname,
        address: address,
        age: age,
        email: email,
        username: username,
        password: password,
    }),
        contentType:"application/json"
        
    }).success(function(data){
            
             alert(data);
              deferred.resolve('Welcome!');
            /* if ( data[0].username != null && data[0].password != null && data[0].lastname != null && data[0].firstname != null &&data[0].email != null ) {
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('please fill all the fields');
            }
              */ 
    
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
});
