import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDTaBZMFyWKK0Y3xmHRnFp5EkWKBhVEv94",
  authDomain: "vue-blog-de285.firebaseapp.com",
  projectId: "vue-blog-de285",
  storageBucket: "vue-blog-de285.appspot.com",
  messagingSenderId: "420552813488",
  appId: "1:420552813488:web:76d47f8075a44842b74475"
};

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp, projectAuth}