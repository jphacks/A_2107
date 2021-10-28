$(()=>{
    var pageURL=location.href
    var splitedURL=pageURL.split("/")
    var tagName=splitedURL[splitedURL.length-1]
    var uid,points;
    pageShow=(points)=>{
        list=[]
        tagList=["tag1","tag2","tag3","tag4","tag5"]
        tagList.forEach((i)=>{
            db.collection("article").where(i,"==",tagName).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    list.push(doc.data());
                });
            })
        })
        setTimeout(() => {
            list.forEach((i)=>{
                i.points=(points[0]-i.points[0])**2+(points[1]-i.points[1])**2+(points[2]-i.points[2])**2
                // i.points=10
            })
            list = [...list].sort((a,b) => a.points - b.points);
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
        }, 300);
    }
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            uid= user.uid;
            db.collection("users").doc(uid).get().then((doc) => {
                points=doc.data().points;
                setTimeout(() => {
                    pageShow(points)
                }, 100);
            })
        }
    });
})