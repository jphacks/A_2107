function signInWithEmailPassword(email,password) {
    var email = email;
    var password = password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage)
    });
}

function signUpWithEmailPassword(email,password) {
    var email = email;
    var password = password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage)
    });
}

function authStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            console.log(uid)
        } else {
            console.log('ログインされている状態にありません')
        }
    });
}

function signOut() {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
        console.log('ログインされている状態にありません')
    });
}

function updateUserProfile(displayName) {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: displayName,
    }).then(() => {
    }).catch((error) => {
    });
}
function getUserProfile() {
    const user = firebase.auth().currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        console.log(displayName)
        console.log(email)
    }
}

function sendEmailVerification() {
    // [START auth_send_email_verification]
    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
        // Email verification sent!
        // ...
    });
    // [END auth_send_email_verification]
}  