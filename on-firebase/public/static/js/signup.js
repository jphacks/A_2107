$(()=>{
    def=()=>{
        return {mail:$('#mail').val(),pass:$('#pass').val(),username:$("#username").val()}
    }
    $(".signUp").click(()=>{
        if(!def().mail || !def().pass){
            alert("記述エラー")
            return false
        }
        signUpWithEmailPassword(def().mail,def().pass)
        sendEmailVerification()
    })
})