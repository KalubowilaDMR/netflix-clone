// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi2l6ehYFOVyBrnzGj2lVr-i_M2blyssw",
  authDomain: "react-netflix-clone-cd25a.firebaseapp.com",
  projectId: "react-netflix-clone-cd25a",
  storageBucket: "react-netflix-clone-cd25a.appspot.com",
  messagingSenderId: "259697993486",
  appId: "1:259697993486:web:17ce6a3e1f84e0acf9d95f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);