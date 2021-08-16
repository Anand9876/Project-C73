import firebase from 'firebase';
require("@firebase/firestore")
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAHsNtHOf1Pi5e3GS3kjCaUHM8WswHlVWA",
    authDomain: "let-s-ride-f24a8.firebaseapp.com",
    projectId: "let-s-ride-f24a8",
    storageBucket: "let-s-ride-f24a8.appspot.com",
    messagingSenderId: "262651587497",
    appId: "1:262651587497:web:4791ce373287b29dba32b8"
  };
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
 };
  export default firebase.firestore()

