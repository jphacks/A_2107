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
        var value=$(`input:radio[name="question-1"]:checked`).val();
        if(value=="-1"){
            points[0]-=1
        }else if(value=="-2"){
            points[0]-=2
        }else if(value=="1"){
            points[0]+=1
        }else if(value=="2"){
            points[0]+=2
        }
        value=$(`input:radio[name="question-4"]:checked`).val();
        if(value=="-1"){
            points[0]-=1
        }else if(value=="-2"){
            points[0]-=2
        }else if(value=="1"){
            points[0]+=1
        }else if(value=="2"){
            points[0]+=2
        }
        value=$(`input:radio[name="question-7"]:checked`).val();
        if(value=="-1"){
            points[0]-=1
        }else if(value=="-2"){
            points[0]-=2
        }else if(value=="1"){
            points[0]+=1
        }else if(value=="2"){
            points[0]+=2
        }
        value=$(`input:radio[name="question-2"]:checked`).val();
        if(value=="-1"){
            points[1]-=1
        }else if(value=="-2"){
            points[1]-=2
        }else if(value=="1"){
            points[1]+=1
        }else if(value=="2"){
            points[1]+=2
        }
        value=$(`input:radio[name="question-5"]:checked`).val();
        if(value=="-1"){
            points[1]-=1
        }else if(value=="-2"){
            points[1]-=2
        }else if(value=="1"){
            points[1]+=1
        }else if(value=="2"){
            points[1]+=2
        }
        value=$(`input:radio[name="question-8"]:checked`).val();
        if(value=="-1"){
            points[1]-=1
        }else if(value=="-2"){
            points[1]-=2
        }else if(value=="1"){
            points[1]+=1
        }else if(value=="2"){
            points[1]+=2
        }
        value=$(`input:radio[name="question-3"]:checked`).val();
        if(value=="-1"){
            points[2]-=1
        }else if(value=="-2"){
            points[2]-=2
        }else if(value=="1"){
            points[2]+=1
        }else if(value=="2"){
            points[2]+=2
        }
        value=$(`input:radio[name="question-6"]:checked`).val();
        if(value=="-1"){
            points[2]-=1
        }else if(value=="-2"){
            points[2]-=2
        }else if(value=="1"){
            points[2]+=1
        }else if(value=="2"){
            points[2]+=2
        }
        value=$(`input:radio[name="question-9"]:checked`).val();
        if(value=="-1"){
            points[2]-=1
        }else if(value=="-2"){
            points[2]-=2
        }else if(value=="1"){
            points[2]+=1
        }else if(value=="2"){
            points[2]+=2
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