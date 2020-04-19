function logIn(email, password) {
    console.log('LogIn - Email: ' + email + ', Password: ' + password);
    firebase.auth().setPersistance(firebase.auth.Auth.Persistance.NONE).then(function (success) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(function (user) {
                alert("User signed in")
            })
            .catch(function (error) {
                alert("User is not signed in!");
            });
    })

}

function register(email, password) {
    console.log('Register - Email: ' + email + ', Password: ' + password);

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            alert("User account created")
        })
        .catch(function (error) {
            alert("User can not be created!");
        });
}


function getProfileData() {
    var user = firebase.auth().currentUser;
    if (user != null) {
        console.log("USER = ", user);
    } else {
        alert("There is not authenticated user!")
    }
}

function logout() {
    firebase
        .auth()
        .signOut()
        .then(function () {
            alert("User signed out!");
        }).catch(function (error) {
            alert("Something went wrong");
        });
}

function updateProfile() {
    var user = firebase.auth().currentUser;

    if (user != null) {
        user.updateProfile({
            displayName: "updated name"
        });

        user
            .updateEmail("test1@gmail.com")
            .then(function () {
                alert("Email updated");
            }).catch(function (error) {
                alert("Email not updated");
            });
    } else {
        alert("There is no user!")
    }
}

function verifyUser() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
        alert("Email sent!");
    }).catch(function (error) {
        alert("Email not sent!");
    });
}

function deleteUser() {
    var user = firebase.auth().currentUser;

    user.delete().then(function () {
        alert("User deleted!");
    }).catch(function (error) {
        alert("User not deleted!");
    });

}
function resetPassword() {
    var user = firebase.auth().currentUser;

    firebase.auth().sendPasswordResetEmail(user.email).then(function () {
        alert("Email sent!");
    }).catch(function (error) {
        alert("Email not sent!");
    });
}
