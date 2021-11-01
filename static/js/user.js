$(()=>{
    var pageURL=location.href
    var splitedURL=pageURL.split("/")
    var whosePage=splitedURL[splitedURL.length-1]
    $(".user_name").append(whosePage)
    db.collection("article").where("username", "==", whosePage).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var thisArticleID=doc.id
            $(".article_group").append(
                `
                <div class="article ${thisArticleID}">
                <p class="title">${doc.data().title}</p>
                <p class="time">${doc.data().time}</p>
                <p class="term">期間 )  ${doc.data().term}</p>
                <p class="sentence">${doc.data().sentence}</p>
                </div>    
                `
            )
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    var uid = user.uid;
                    db.collection("users").doc(uid).get().then((doc) => {
                        if (doc.exists) {
                            if(doc.data().username==whosePage){
                                $(`.${thisArticleID}`).append(
                                    `<div class="delete" id="${thisArticleID}">記事削除</div>`
                                )
                                $(`#${thisArticleID}`).click(()=>{
                                    db.collection("article").doc(`${thisArticleID}`).delete()
                                    setTimeout(() => {
                                        window.location.reload()
                                    }, 100);
                                })
                            }
                        }
                    })
                }
            });
        });
    })
})