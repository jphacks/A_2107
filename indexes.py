import firebase
db=firebase.initialize()

def findArticle(index):
    list_id = []
    articles = db.collection('article').stream()

    for doc in articles:
        index_id = doc.id
        title = doc.to_dict()["title"]
        tag = doc.to_dict()["tag"]
        sentence = doc.to_dict()["sentence"]
        if index in tag:
            list_id.append(index_id) 
        elif index in title:
            list_id.append(index_id)
        elif index in sentence:
            list_id.append(index_id)
    return list_id