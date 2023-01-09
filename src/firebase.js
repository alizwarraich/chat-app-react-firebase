import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-chat-app-81915.firebaseapp.com",
  projectId: "react-chat-app-81915",
  storageBucket: "react-chat-app-81915.appspot.com",
  messagingSenderId: "534285568648",
  appId: "1:534285568648:web:b8fdeeaaf4efa43b796d3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
