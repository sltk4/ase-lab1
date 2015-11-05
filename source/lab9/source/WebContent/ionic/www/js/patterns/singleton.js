var User = (function () {
  var instance;

  function init() {
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";

    return {
      // Public methods
      fullName: function () {
        return instance.firstName +" "+instance.lastName;
      },
      //Public Properties
      firstname : localStorage.firstname,
      lastname : localStorage.lastname,
      username : localStorage.username,
      password : localStorage.password,
      id : localStorage.id
    };
  };

  return {
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();