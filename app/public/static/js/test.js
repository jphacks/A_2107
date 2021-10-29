

const pv=(key)=>{
    var list=[]
    db.collection("article")
    .get()
    .then((querySnapshot) => {
        var regex = new RegExp(key);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // if(doc.data().tag1.test(regex)){
            //     list.push(doc.id)
            // }else if(regex.test(doc.data().tag2)){
            //     list.push(doc.id)
            // }else if(regex.test(doc.data().tag3)){
            //     list.push(doc.id)
            // }else if(regex.test(doc.data().tag4)){
            //     list.push(doc.id)
            // }else if(regex.test(doc.data().tag5)){
            //     list.push(doc.id)
            // }
            tags=[doc.data().tag1,doc.data().tag2,doc.data().tag3,doc.data().tag4,doc.data().tag5]
            tags.forEach((i)=>{
                if(i.test(/%E7%9D%A1%E7%9C%A0/)){
                    list.push(doc.id)
                }
            })
        });
        console.log(list)
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
splitMatch=(key)=>{
    keys=key.split("%")
    key=""
    keys.forEach((i)=>{
        key+=i
    })
    key+="*"
    console.log(key)
    return key
}
// splitMatch("%E7%9D%A1%E7%9C%A0")
// pv(/%E7%9D%A1%E7%9C%A0/)

// console.log("hello".test(/hello/))
str="ありがとう"
re = new RegExp("^あ")
if( re.test(str) ){
    console.log("good")
}