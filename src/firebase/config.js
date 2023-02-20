import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCi_Ticcj8yJ-jb0izELxrbBqz5nQEoMmA",
    authDomain: "live-chat-798b6.firebaseapp.com",
    projectId: "live-chat-798b6",
    storageBucket: "live-chat-798b6.appspot.com",
    messagingSenderId: "308422084004",
    appId: "1:308422084004:web:df0904c15f06fb25406d31"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp, projectAuth}