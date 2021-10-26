import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
def initialize():
    cred = credentials.Certificate('nokhik-firebase-adminsdk-furbv-c863b9be8e.json')
    firebase_admin.initialize_app(cred)
    db = firestore.client()
    return db