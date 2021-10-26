const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDaWEG66OmsYgPiwbSeW7SS47wmC3d6oE4",
    authDomain: "fitway-7f54b.firebaseapp.com",
    projectId: "fitway-7f54b",
    storageBucket: "fitway-7f54b.appspot.com",
    messagingSenderId: "914494868983",
    appId: "1:914494868983:web:419a64c8ffd7b0fd17b2f2",
    measurementId: "G-61Z8G2G9VL"
});

var db = firebaseApp.firestore();
var auth=firebaseApp.auth()

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });