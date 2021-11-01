import firebase
db=firebase.initialize()

def findArticle(index):
    list_id = [] 
    articles = db.collection("article").stream()
    if "@" in index:
        if "@" in index:
            name_index = index.lstrip("@")
        for doc in articles:
            index_id = doc.id
            username = doc.to_dict()["username"]
            if name_index in username:
                list_id.append(index_id)
    if "#" in index:
        tag_index = index.lstrip("#")
        tag_index = tag_index.lower()
        for doc in articles:
            index_id = doc.id
            tag = doc.to_dict()["tag"]
            tag = tag.lower()
            if tag_index in tag:
                list_id.append(index_id)
    else:
        for doc in articles:
            index_id = doc.id
            title = doc.to_dict()["title"]
            tag = doc.to_dict()["tag"]
            sentence = doc.to_dict()["sentence"]
            index = index.lower()
            title = title.lower()
            tag = tag.lower()
            sentence = sentence.lower()
            if index in title:
                list_id.append(index_id) 
            elif index in tag:
                list_id.append(index_id)
            elif index in sentence:
                list_id.append(index_id)
    return list_id