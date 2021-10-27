$(()=>{
    function signUpWithEmailPassword() {
        if($('#email').val() && $('#password').val()){
            var email = "$('#email').val()";
            var password = $('#password').val();
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
    }

    function updateUserProfile() {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        }).catch((error) => {
        });
    }

    function getUserProfile() {
        const user = firebase.auth().currentUser;
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            const uid = user.uid;
            console.log(displayName)
            console.log(email)
            console.log(photoURL)
            console.log(emailVerified)
        }
    }

    $('#signUpWithEmailPassword').on('click', function() {
        signUpWithEmailPassword()
    });

    $('#updateUserProfile').click(()=>{
        updateUserProfile()
    })

    $('#getUserProfile').click(()=>{
        getUserProfile()
    })
})