import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrWyhODh3EW1OGx-GwIkkh5ThLCqkOW08",
  authDomain: "ff-ecommerce.firebaseapp.com",
  databaseURL: "https://ff-ecommerce.firebaseio.com",
  projectId: "ff-ecommerce",
  storageBucket: "",
  messagingSenderId: "587867479597",
  appId: "1:587867479597:web:f3e366375300ffac"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // .get(): retrieve method
  // pulls out a snapshot obj of userRef location in database

  // if snapShot doesn't exist
  // create a new user
  // using data from userAuth object
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        // .set(): create method
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;
