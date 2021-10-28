$(()=>{
    def=()=>{
        return {mail:$('#mail').val(),pass:$('#pass').val(),username:$("#username").val()}
    }
    $(".signUp").click(()=>{
        // if(!def().mail || !def().pass){
        //     alert("記述エラー")
        //     return false
        // }
        var points=[0,0,0]
        for(let i=1;i<10;i++){
            var value = $(`input:radio[name="question-${i}"]:checked`).val();
            switch(i%3){
                case 1:
                    if(value=="-1"){
                        points[0]-=1
                    }else if(value=="-2"){
                        points[0]-=2
                    }else if(value=="1"){
                        points[0]+=1
                    }else if(value=="2"){
                        points[0]+=2
                    }
                case 2:
                    if(value=="-1"){
                        points[1]-=1
                    }else if(value=="-2"){
                        points[1]-=2
                    }else if(value=="1"){
                        points[1]+=1
                    }else if(value=="2"){
                        points[1]+=2
                    }
                case 3:

                    if(value=="-1"){
                        points[2]-=1
                    }else if(value=="-2"){
                        points[2]-=2
                    }else if(value=="1"){
                        points[2]+=1
                    }else if(value=="2"){
                        points[2]+=2
                    }
            }
        }
        console.log(points)
        // signUpWithEmailPassword(def().mail,def().pass)
        // setTimeout(() => {
        //     firebase.auth().onAuthStateChanged((user) => {
        //         uid= user.uid;
        //         db.collection("users").doc(uid).set({
        //             username:def().username,
        //             points:points
        //         })
        //     })
        // }, 100);
        // sendEmailVerification()
    })
})