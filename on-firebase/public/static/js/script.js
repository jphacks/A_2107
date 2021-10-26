$(()=>{
    def=()=>{
        return {mail:$('#mail').val(),pass:$('#pass').val(),username:$("#username").val()}
    }
    $(".signUp").click(()=>{
        if(!def().mail || !def().pass || !def().username){
            alert("記述エラー")
            return false
        }
        signUpWithEmailPassword(def().mail,def().pass)
        updateUserProfile(def().username)
        sendEmailVerification()
    })
    $(".signIn").click(()=>{
        if(!$('#mail').val() || !$('#pass').val()){
            alert("記述エラー")
            return false
        }
        signInWithEmailPassword(def().mail,def().pass)
    })
    $(".signOut").click(()=>{
        signOut()
    })
    $(".signCheck").click(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var uid= user.uid;
                console.log(uid)
            } else {
                console.log("ログインされている状態にありません")
            }
        });
    })
})