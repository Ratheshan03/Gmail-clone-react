import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXKlh_dlvt0O7ZLR1cq6HiAhHGNETfEqk",
  authDomain: "clone-f3ce6.firebaseapp.com",
  projectId: "clone-f3ce6",
  storageBucket: "clone-f3ce6.appspot.com",
  messagingSenderId: "180300588349",
  appId: "1:180300588349:web:e0303300bcfd580b2b9154",
  measurementId: "G-G9XBFPJDMN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
