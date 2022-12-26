// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWefvz65z4CIX67TALBBuNkDrYdIKBCM4",
  authDomain: "drzave-357f7.firebaseapp.com",
  projectId: "drzave-357f7",
  storageBucket: "drzave-357f7.appspot.com",
  messagingSenderId: "284421916096",
  appId: "1:284421916096:web:223df2dfc9d82c2e4e3425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service


export const auth = getAuth(app);
