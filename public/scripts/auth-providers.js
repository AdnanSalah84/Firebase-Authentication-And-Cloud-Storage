function signInGoogle() {
    console.log("signInGoogle called...");
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            alert("User Authenticated");
            var user = result.user;
            console.log("User ====== ", user)
        })
        .catch(function (error) {
            alert("Authentication failed!");
        });
}

function signInFacebook() {
    console.log("signInFacebook called...");

    var provider = new firebase.auth.FacebookAuthProvider();

    //provider.addScope('user_birthday');

    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            alert("User Authenticated");
            var user = result.user;
            console.log("User ====== ", user)
        })
        .catch(function (error) {
            alert("Authentication failed!");
            console.log("Error: ", error.message);
        });
}

function signInTwitter() {
    console.log("signInTwitter called...");

    var provider = new firebase.auth.TwitterAuthProvider();

    //provider.addScope('user_birthday');

    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            alert("User Authenticated");
            var user = result.user;
            console.log("User ====== ", user)
        })
        .catch(function (error) {
            alert("Authentication failed!");
            console.log("Error: ", error.message);
        });
}

function signInGithub() {
    console.log("signInGithub called...");

    var provider = new firebase.auth.GithubAuthProvider();

    //provider.addScope('repo');

    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            alert("User Authenticated");
            var user = result.user;
            console.log("User ====== ", user)
        })
        .catch(function (error) {
            alert("Authentication failed!");
            console.log("Error: ", error.message);
        });
}