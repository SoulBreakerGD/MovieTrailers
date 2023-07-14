// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGEgbsByG_fn9qRqoXeffeodWBgD8BNHc",
  authDomain: "lab7-8e66c.firebaseapp.com",
  projectId: "lab7-8e66c",
  storageBucket: "lab7-8e66c.appspot.com",
  messagingSenderId: "896221703646",
  appId: "1:896221703646:web:3630f37fae1cf36773414f",
  measurementId: "G-JC0YQES5DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();