// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxXJ0pkyYycg_7Lyz9IJA6p8zktqg4jgw",
  authDomain: "ea18-8db72.firebaseapp.com",
  projectId: "ea18-8db72",
  storageBucket: "ea18-8db72.firebasestorage.app",
  messagingSenderId: "339589356694",
  appId: "1:339589356694:web:92880e14a3019138b8f6b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);