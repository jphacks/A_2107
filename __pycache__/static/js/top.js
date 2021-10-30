$(()=>{
    db.collection("article")
    .get()
    .then((querySnapshot) => {
        var list=[]
        querySnapshot.forEach((doc) => {
            list.push(doc.data().tag1)
            if(doc.data().tag2 !== undefined){
                list.push(doc.data().tag2)
            }
            if(doc.data().tag3 !== undefined){
                list.push(doc.data().tag3)
            }
            if(doc.data().tag4 !== undefined){
                list.push(doc.data().tag4)
            }
            if(doc.data().tag5 !== undefined){
                list.push(doc.data().tag5)
            }
        });
        var listed=[]
        var countListed=[]
        list.forEach((i)=>{
            if(listed.indexOf(i)==-1){
                listed.push(i)
                countListed.push(1)
            }else{
                countListed[listed.indexOf(i)]+=1
            }
        })
        var a=0
        var sortList=[]
        listed.forEach((i)=>{
            sortList.push({tag:i,count:Number(countListed[a])})
            a++
        })
        setTimeout(() => {
            sortList.sort(function(a, b) {
                if (a.count < b.count) {
                    return 1;
                } else {
                    return -1;
                }
            })
        }, 100);
        setTimeout(() => {
            var b=0
            sortList.forEach((i)=>{
                if(b<10){
                    $(".tags").append(
                        `<a href="/search/${i.tag}"><p class="content_tag">#${i.tag}(${String(i.count)}件)</p></a>`
                    )
                }
                b++
            })
        }, 300);
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            uid= user.uid;
            db.collection("users").doc(uid).get().then((doc) => {
                var username=doc.data().username;
                $("header").append(
                    `<a href="/user/${username}"><i class="account fas fa-user-circle fa-3x"></i></a>`
                )
            })
        }else{
            $("header").append(
                `<a href="/signup"><i class="account fas fa-user-circle fa-3x"></i></a>`
            )
        }
    });
})