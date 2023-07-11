// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNLw1M4Wz43aD6af9Ok11NMR4F-JrACos",
  authDomain: "pinterest-5ef2b.firebaseapp.com",
  projectId: "pinterest-5ef2b",
  storageBucket: "pinterest-5ef2b.appspot.com",
  messagingSenderId: "340259460714",
  appId: "1:340259460714:web:49c39cd541291ec04c9c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
