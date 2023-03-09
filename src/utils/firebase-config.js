// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/firebase-auth";


const firebaseConfig = {
  apiKey: "AIzaSyCc1alsrHbnDCAyc_xMtzq2IuZV2biNBoY",
  authDomain: "react-netflix-clone-e04c7.firebaseapp.com",
  projectId: "react-netflix-clone-e04c7",
  storageBucket: "react-netflix-clone-e04c7.appspot.com",
  messagingSenderId: "78721798819",
  appId: "1:78721798819:web:7b598dca7da7af0d1d6516",
  measurementId: "G-N33DQXCK8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);