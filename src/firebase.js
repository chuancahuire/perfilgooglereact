import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB3wlxQFBA9jBPuyoXqtn49rXUnAUIGAJU",
    authDomain: "crud-react1-77726.firebaseapp.com",
    projectId: "crud-react1-77726",
    storageBucket: "crud-react1-77726.appspot.com",
    messagingSenderId: "120194026047",
    appId: "1:120194026047:web:98b55a1702b213db03468a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}