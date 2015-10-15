angular.module('starter.services', [])
.service('LoginService', function($q, $http) {
    return {
  loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/medcon/collections/Users?q={username:\''+name+'\'}&apiKey=BSHQMdPlD-USKTsizAPOBio_XS-05S-b',
        contentType:"application/json"
        
    }).success(function(data){
      if (name == data[0].username && pw == data[0].password) {
                deferred.resolve('Welcome ' + data[0].username + '!');
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
        
         deleteUser:function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/medcon/collections/Users?q={username:\''+name+'\'}&apiKey=BSHQMdPlD-USKTsizAPOBio_XS-05S-b',
        contentType:"application/json"
        
    }).success(function(data){
     
      if (name == data[0].username && pw == data[0].password) {
         
          $http({
              method: 'DELETE' ,   
        url: 'https://api.mongolab.com/api/1/databases/medcon/collections/Users/'+data[0]._id.$oid+'?apiKey=BSHQMdPlD-USKTsizAPOBio_XS-05S-b',
		 
             }).success(function (data) { 
             alert(1);
             })
                deferred.resolve('Welcome ' + data[0].username + '!');
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

.service('UpdateService', function($q, $http) {
    return {
        
         updateUser:function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/medcon/collections/Users?q={username:\''+name+'\'}&apiKey=BSHQMdPlD-USKTsizAPOBio_XS-05S-b',
        contentType:"application/json"
        
    }).success(function(data){
     alert(data[0]._id.$oid);
      if (name == data[0].username ) {
         
          $http({
              method: 'PUT' ,   
        url: 'https://api.mongolab.com/api/1/databases/medcon/collections/Users/'+data[0]._id.$oid+'?apiKey=BSHQMdPlD-USKTsizAPOBio_XS-05S-b',
		 data: JSON.stringify( { "$set" : { "password" : pw } } ),
		 
		  contentType: "application/json"
             }).success(function (data) { 
             alert(1);
             })
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('Wrong update credentials.');
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



.service('RegisterService', function($q, $http) {
    return {
        RegisterUser: function(fname, lname, address, age, email, username, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
          $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/medcon/collections/Users?apiKey=BSHQMdPlD-USKTsizAPOBio_XS-05S-b',
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
