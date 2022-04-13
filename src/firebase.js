import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "fb-clone-bb609.firebaseapp.com",
    projectId: "fb-clone-bb609",
    storageBucket: "fb-clone-bb609.appspot.com",
    messagingSenderId: "903361665496",
    appId: "1:903361665496:web:0b028a397b43d44380faad",
    measurementId: "G-229DJEMVSG"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

export {auth, provider}
export default db