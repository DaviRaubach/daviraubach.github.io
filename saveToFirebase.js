    // Get a reference to the database service
 

function writeUserData(email) {

    var emailObject = document.getElementById("inputEmail").value;

    var database = firebase.database();
    
  firebase.database().ref().set({
    email: emailObject,
  });
}



