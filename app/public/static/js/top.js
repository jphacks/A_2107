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
        listed.forEach((i)=>{
            $(".tags").append(
                `<a href="/search/${i}"><p>#${i}(${countListed[a]}件)</p></a>`
            )
            a++
        })
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
})