import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwzTeSZza16dAW3x1rF_QnvizVLJVK2Ow",
  authDomain: "crwn-db-27f4d.firebaseapp.com",
  databaseURL: "https://crwn-db-27f4d.firebaseio.com",
  projectId: "crwn-db-27f4d",
  storageBucket: "crwn-db-27f4d.appspot.com",
  messagingSenderId: "46172237685",
  appId: "1:46172237685:web:edf9ef3c48a75d018c6d3c",
  measurementId: "G-09KKLP9VMX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
