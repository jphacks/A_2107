$(()=>{
    def=()=>{
        return {mail:$('#mail').val(),pass:$('#pass').val(),username:$("#username").val()}
    }
    $(".signUp").click(()=>{
        if(!def().mail || !def().pass){
            alert("記述エラー")
            return false
        }
        var points=[0,0,0]
        for(let i=1;i<10;i++){
            var value = Number($(`input:radio[name="question-${i}"]:checked`).val());
            switch(i%3){
                case 1:
                    points[0]+=value
                case 2:
                    points[1]+=value
                case 3:
                    points[2]+=value
            }
        }
        signUpWithEmailPassword(def().mail,def().pass)
        setTimeout(() => {
            firebase.auth().onAuthStateChanged((user) => {
                uid= user.uid;
                db.collection("users").doc(uid).set({
                    username:def().username,
                    points:points
                })
            })
        }, 100);
        sendEmailVerification()
    })
})