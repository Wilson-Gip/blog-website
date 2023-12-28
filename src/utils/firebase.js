// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bogl-437a6.firebaseapp.com",
  projectId: "bogl-437a6",
  storageBucket: "bogl-437a6.appspot.com",
  messagingSenderId: "860061106328",
  appId: "1:860061106328:web:5e44ca40d6adcbb55790ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);