import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCluKH56_FhdJJLUxqDjD2PdBHHMOQ3wx0",
    authDomain: "crwn-db-26a66.firebaseapp.com",
    projectId: "crwn-db-26a66",
    storageBucket: "crwn-db-26a66.appspot.com",
    messagingSenderId: "786553683083",
    appId: "1:786553683083:web:2493864793986a4569e88e",
    measurementId: "G-YNB5R1Y9CN"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;