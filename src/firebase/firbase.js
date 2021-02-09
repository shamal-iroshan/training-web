import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCvupUYPTmpwTU4HV2AZaCStEbkWvpnms",
    authDomain: "dear-diary-6b2f1.firebaseapp.com",
    projectId: "dear-diary-6b2f1",
    storageBucket: "dear-diary-6b2f1.appspot.com",
    messagingSenderId: "75173898962",
    appId: "1:75173898962:web:49c83e1fc2ed0f634e5b0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;