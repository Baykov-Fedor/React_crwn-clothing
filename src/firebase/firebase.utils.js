import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAbeg1U1MF6APsa4OZmc_mW41ygSVN84N0",
  authDomain: "crwn-db-125b2.firebaseapp.com",
  databaseURL: "https://crwn-db-125b2.firebaseio.com",
  projectId: "crwn-db-125b2",
  storageBucket: "crwn-db-125b2.appspot.com",
  messagingSenderId: "597605346480",
  appId: "1:597605346480:web:81d7f66c7eb1fba3c21f75",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
