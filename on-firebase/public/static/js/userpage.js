$(()=>{
    var pageURL=location.href
    var splitedURL=pageURL.split("/")
    var whosePage=splitedURL[splitedURL.length-1]
    console.log(whosePage)
})