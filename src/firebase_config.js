import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChJ5cWAKicEFA4jtKRrnkCWChb7PhkiFw",
  authDomain: "clone-70f24.firebaseapp.com",
  projectId: "clone-70f24",
  storageBucket: "clone-70f24.appspot.com",
  messagingSenderId: "460796188727",
  appId: "1:460796188727:web:293923afc6984ceaf707b2",
  measurementId: "G-B81NF7J531",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
