$(()=>{
    var pageURL=location.href
    var splitedURL=pageURL.split("/")
    var whosePage=splitedURL[splitedURL.length-1]
    $("body").append(
        `<p>これは${whosePage}のページです</p>`
    )
    db.collection("article").where("username", "==", whosePage)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            $("body").append(
                `<p>${doc.data().title}</p>
                <p>${doc.data().sentence}</p>`
            )
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
})