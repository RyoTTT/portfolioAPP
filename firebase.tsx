// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4SgKHd9xikuLLebENoPKguTueo5r8Zyc",
  authDomain: "portforioapp.firebaseapp.com",
  projectId: "portforioapp",
  storageBucket: "portforioapp.appspot.com",
  messagingSenderId: "451722898977",
  appId: "1:451722898977:web:f0c3e43eb35c8358fa7d60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export default db;