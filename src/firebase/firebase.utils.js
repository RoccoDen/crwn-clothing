import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQdd2hhNA1hkvid6y-BMBYa2MX5ikXAbQ",
  authDomain: "crwn-db-f0fa3.firebaseapp.com",
  projectId: "crwn-db-f0fa3",
  storageBucket: "crwn-db-f0fa3.appspot.com",
  messagingSenderId: "286890437175",
  appId: "1:286890437175:web:3f5d76451ebe5d92832db2",
  measurementId: "G-HMS7H3KLBW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

//export const signInWithGoogle = signInWithPopup(auth, provider)
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

export default signInWithGoogle;
