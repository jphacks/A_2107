$(()=>{
    var pageURL=location.href
    var splitedURL=pageURL.split("/")
    // var tagName=splitedURL[splitedURL.length-1]
    var uid,points;
    pageShow=(points,tagName)=>{
        list=[]
        tagList=["tag1","tag2","tag3","tag4","tag5"]
        tagList.forEach((i)=>{
            db.collection("article").where(i,"==",tagName).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var data=doc.data()
                    data.articleID=doc.id
                    console.log(data)
                    list.push(data);
                });
            })
        })
        setTimeout(() => {
            list.forEach((i)=>{
                i.points=(points[0]-i.points[0])**2+(points[1]-i.points[1])**2+(points[2]-i.points[2])**2
            })
            list = [...list].sort((a,b) => a.points - b.points);
            setTimeout(() => {
                list.forEach((i)=>{
                    var match;
                    if(i.points>77){
                        match="ほとんどないです"
                    }else if(i.points>62){
                        match="10％以上です"
                    }else if(i.points>52){
                        match="20％以上です"
                    }else if(i.points>43){
                        match="30％以上です"
                    }else if(i.points>36){
                        match="40％以上です"
                    }else if(i.points>28){
                        match="50％以上です"
                    }else if(i.points>21){
                        match="60％以上です"
                    }else if(i.points>16){
                        match="70％以上です"
                    }else if(i.points>9){
                        match="80％以上です"
                    }else{
                        match="90％以上です"
                    }
                    var figure=i.sentence.split("")
                    var sentence=""
                    for(let a=0;a<20;a++){
                        if(figure[a]!=undefined){
                            sentence+=figure[a]
                        }
                    }
                    if(figure.length>20){
                        var d="・・・"
                    }else{
                        var d=""
                    }
                    $("main").append(
                        
                        `<div class="article">
                        <a href="/user/${i.username}"><p>@${i.username}</p></a>
                        <a href="/article/${i.articleID}"><h2>${i.title}</h2></a>
                        <p class="time">${i.time}</p>
                        <p>期間）${i.term}</p>
                        <p class="sentence">${sentence}${d}</p>
                        <p>${i.tag}</p>
                        <p>性格の一致度は、<span style="color:red">${match}</span>。</p>
                        </div>`
                    )
                }) 
            }, 100);
        }, 300);
    }
    pageShowOther=(tagName)=>{
        list=[]
        tagList=["tag1","tag2","tag3","tag4","tag5"]
        tagList.forEach((i)=>{
            db.collection("article").where(i,"==",tagName).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var data=doc.data()
                    data.articleID=doc.id
                    console.log(data)
                    list.push(data);
                });
            })
        })
        $("header").append(
            `
            <a class="signup" href="/signup">Sign Up</a>
            <a class="signin" href="/signin">Sign In</a>`
        )
        $("main").append(
            `<h3 style="margin:0 1vw">サインアップ、サインインするとあなたの性格とマッチする記事が順番に表示されます。</h3>`
        )
        setTimeout(() => {
            list.sort(function(a, b) {
                if (a.time < b.time) {
                    return 1;
                } else {
                    return -1;
                }
            })
            setTimeout(() => {
                list.forEach((i)=>{
                    var figure=i.sentence.split("")
                    var sentence=""
                    for(let a=0;a<20;a++){
                        if(figure[a]!=undefined){
                            sentence+=figure[a]
                        }
                    }
                    if(figure.length>20){
                        var d="・・・"
                    }else{
                        var d=""
                    }
                    $("main").append(
                        `<div class="article">
                        <a href="/user/${i.username}"><p>@${i.username}</p></a>
                        <a href="/article/${i.articleID}"><h2>${i.title}</h2></a>
                        <p class="time">${i.time}</p>
                        <p>期間）${i.term}</p>
                        <p class="sentence">${sentence}${d}</p>
                        <p>${i.tag}</p>
                        </div>`
                    )
                }) 
            }, 100);
        }, 300);
    }
})