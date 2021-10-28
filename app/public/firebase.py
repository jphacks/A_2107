import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def initialize():
    cred = credentials.Certificate('nokhik-firebase-adminsdk-furbv-c863b9be8e.json')
    firebase_admin.initialize_app(cred)
    db = firestore.client()
    return db

docs=initialize().collection("article").stream()
list=[]
for doc in docs:
    list.append(doc.to_dict()["title"])
print(list)