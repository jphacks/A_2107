function signInWithEmailPassword(email,password) {
    var email = email;
    var password = password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        alert("サインインできました")
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("メールアドレスか、パスワードが間違っています。")
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
        alert(errorCode,errorMessage)
    });
}

function authStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid= user.uid;
            return uid
        } else {
            return "ログインされている状態にありません"
        }
    });
}

function signOut() {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
        alert('ログインされている状態にありません')
    });
}
function updateUserProfile(displayName) {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: displayName,
    }).then(() => {
    }).catch((error) => {
        console.log("error")
    });
}
function getUserProfile() {
    const user = firebase.auth().currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        // const email = user.email;
        // alert(displayName)
        // alert(email)
        return displayName
    }else{
        return null
    }
}

function sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
    });
}  