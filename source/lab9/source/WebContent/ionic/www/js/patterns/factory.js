var updateString = (function () {
function updateUsername(userName) {
  jsonString = JSON.stringify({ "$set" : { "username": userName } });
    return jsonString;
}

function updatepassword(passWord) {
  jsonString = JSON.stringify({ "$set" : { "password": passWord } });
        return jsonString;
}
    
function updatefirstname(firstName) {
  jsonString = JSON.stringify({ "$set" : { "firstname": firstName } });
        return jsonString;
}

function updatelastname(lastName) {
  jsonString = JSON.stringify({ "$set" : { "lastname": lastName } });
        return jsonString;
}
 
function updateFactory() {}

updateFactory.generateString = function ( data ) {
    var genString='';
    if(data.username!= localStorage.username){
    genString = updateUsername(data.username);
    }
    if(data.firstname!= localStorage.firstname){
    genString = updatefirstname(data.firstname);
    }
     if(data.lastname!= localStorage.lastname){
    genString = updatelastname(data.lastname);
    }
     if(data.password!= localStorage.password){
    genString = updatepassword(data.password);
    }
  return genString;
};
 return {
        
        getJsonString:function(data)
        {
        return updateFactory.generateString(data);
    }
    };
    
} )();