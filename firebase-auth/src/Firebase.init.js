
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOQyXV4gIxFSud9ZQmVmbI04dpIxiIYU",
  authDomain: "fir-auth-2f039.firebaseapp.com",
  projectId: "fir-auth-2f039",
  storageBucket: "fir-auth-2f039.firebasestorage.app",
  messagingSenderId: "711694247429",
  appId: "1:711694247429:web:8203bff3cb7be0229f5e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);