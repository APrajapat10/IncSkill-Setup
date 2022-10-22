// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtx-RZmp1jmKjIS4UuvDk8cO66MPFX9g0",
  authDomain: "incskill-29095.firebaseapp.com",
  projectId: "incskill-29095",
  storageBucket: "incskill-29095.appspot.com",
  messagingSenderId: "989218047082",
  appId: "1:989218047082:web:28862dce70ff9197597613",
  measurementId: "G-41HRZXZ8C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
