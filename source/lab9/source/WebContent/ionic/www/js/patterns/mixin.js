function augment( receivingClass, givingClass ) {
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    else {
        for ( var methodName in givingClass.prototype ) {
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
            
        }
    }
} 
var Mixin  = function() {}
Mixin.prototype = {
  loginURL: function(){
    return 'http://mongoservice.mybluemix.net/rest/login/'+localStorage.username;
  },
  registerURL: function(){
    return 'http://mongoservice.mybluemix.net/rest/signup';
  },
  deleteURL: function(){
    return 'http://mongoservice.mybluemix.net/rest/delete/'+localStorage.id;
  }
};
