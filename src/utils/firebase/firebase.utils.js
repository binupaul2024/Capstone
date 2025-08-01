import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBUp0Txj0654Gf16B4RbVJF1GN4ea_OKY",
  authDomain: "crwn-clothing-db-b15ac.firebaseapp.com",
  projectId: "crwn-clothing-db-b15ac",
  storageBucket: "crwn-clothing-db-b15ac.firebasestorage.app",
  messagingSenderId: "347134228155",
  appId: "1:347134228155:web:7439af8015be18ed3a5b9e",
  measurementId: "G-XN89BNJP56",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account",
// });

// export const auth = getAuth(app);

// export const signInWithGooglePopup = () => {
//   signInWithPopup(auth, provider);
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userDocSnapShot = await getDoc(userDocRef);
  console.log(userDocSnapShot);

  if (!userDocSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export { auth, provider, signInWithPopup, createUserDocumentFromAuth };
