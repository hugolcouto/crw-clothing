import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDeoPC7qMmSxnKbhMKaxgxLCZszY5XL62U",
    authDomain: "crwn-db-4e78e.firebaseapp.com",
    databaseURL: "https://crwn-db-4e78e.firebaseio.com",
    projectId: "crwn-db-4e78e",
    storageBucket: "",
    messagingSenderId: "412383175715",
    appId: "1:412383175715:web:325c4f2bad01577c433d96"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShop = await userRef.get();

    if(!snapShop.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...aditionalData });
        } catch (err) {
            console.error('Error while create user', err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle  = () => auth.signInWithPopup(provider);
export default firebase;