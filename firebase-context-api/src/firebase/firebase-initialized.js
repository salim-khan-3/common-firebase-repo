// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXSel--qBmT0fmO29GAi-JLvKwCtztS8o",
  authDomain: "fir-context-api-de164.firebaseapp.com",
  projectId: "fir-context-api-de164",
  storageBucket: "fir-context-api-de164.firebasestorage.app",
  messagingSenderId: "259137154723",
  appId: "1:259137154723:web:1fe28fe9d3e95ca0259916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);