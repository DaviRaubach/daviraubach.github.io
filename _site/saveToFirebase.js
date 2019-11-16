
function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

   firebase.database().ref().child('subscription-entries').set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error();
            "ERROR" // some error method
        });
}

saveToFirebase(email);

