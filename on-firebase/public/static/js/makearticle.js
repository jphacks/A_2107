$(()=>{
    def=()=>{
        return {tag:$("#tag").val(),title:$('#title').val(),sentence:$('#sentence').val()}
    }
    var uid;
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            uid= user.uid;
        } else {
            alert("ログインしてから投稿をお願いします。")
            setTimeout(() => {
                history.back();
            }, 5000);
        }
    });
    $(".complate").click(()=>{
        const date1 = new Date();
        const date2 = date1.getFullYear() + "年" + 
				(date1.getMonth() + 1)  + "月" + 
				date1.getDate() + "日" + 
				date1.getHours() + "時" + 
				date1.getMinutes() + "分"
        const tags=def().tag.split(" ")
        if(tags.length==1){
            db.collection("article").add({
                title:def().title,
                username: uid,
                tag1: def().tag,
                sentence:def().sentence,
                time:date2
            })
        }else if(tags.length==2){
            db.collection("article").add({
                title:def().title,
                username: uid,
                tag1: tags[0],
                tag2: tags[1],
                sentence:def().sentence,
                time:date2
            })
        }else if(tags.length==3){
            db.collection("article").add({
                title:def().title,
                username: uid,
                tag1: tags[0],
                tag2: tags[1],
                tag3: tags[2],
                sentence:def().sentence,
                time:date2
            })
        }else if(tags.length==4){
            db.collection("article").add({
                title:def().title,
                username: uid,
                tag1: tags[0],
                tag2: tags[1],
                tag3: tags[2],
                tag4: tags[3],
                sentence:def().sentence,
                time:date2
            })
        }else if(tags.length==5){
            db.collection("article").add({
                title:def().title,
                username: uid,
                tag1: tags[0],
                tag2: tags[1],
                tag3: tags[2],
                tag4: tags[3],
                tag5: tags[4],
                sentence:def().sentence,
                time:date2
            })
        }else{
            
        }
        
    })
})