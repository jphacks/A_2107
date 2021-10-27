$(()=>{
    var pageURL=location.href
    var splitedURL=pageURL.split("/")
    var tagName=splitedURL[splitedURL.length-1]
    var uid,points;
    pageShow=(points)=>{
        list=[]
        tagList=["tag1","tag2","tag3","tag4","tag5"]
        tagList.forEach((i)=>{
            console.log(i,tagName)
            db.collection("article").where(i,"==",tagName).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    list.push(doc.data());
                });
            })
        })
        setTimeout(() => {
            list.forEach((i)=>{
            $("main").append(
                `<div>
                <p>${i.title}</p>
                <p>${i.time}</p>
                <p>${i.term}</p>
                <p>${i.sentence}</p>
                <p>${i.tag}</p>
                <p>${i.points}</p>
                </div>`
            )
        })
        }, 100);
    }
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            uid= user.uid;
            db.collection("users").doc(uid).get().then((doc) => {
                // username=doc.data().username;
                points=doc.data().points;
                setTimeout(() => {
                    pageShow(points)
                }, 100);
            })
        }
    });
})