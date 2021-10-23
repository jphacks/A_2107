import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def firebase():
    cred = credentials.Certificate('nokhik-firebase-adminsdk-furbv-6ea3aa26e4.json')
    firebase_admin.initialize_app(cred)