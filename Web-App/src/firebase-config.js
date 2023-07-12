import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGuKA9ugVlygbFz84OtYURrDb0MZE--aY",
  authDomain: "sustainability-ggh.firebaseapp.com",
  projectId: "sustainability-ggh",
  storageBucket: "sustainability-ggh.appspot.com",
  messagingSenderId: "465375221749",
  appId: "1:465375221749:web:4c54afef7e262187bb72bc",
  measurementId: "G-CDKE7MZJFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// setPersistence(auth, browserSessionPersistence)
//   .then(() => {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return signInWithPopup(auth, googleProvider);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in", user);
  } else {
    console.log("user logged out");
  }
});

export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
