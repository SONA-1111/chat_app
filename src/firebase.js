// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWc-aGhAycQpkIBf6MiYdIa-YmW9pl8LM",
  authDomain: "chatapp-d7799.firebaseapp.com",
  projectId: "chatapp-d7799",
  storageBucket: "chatapp-d7799.appspot.com",
  messagingSenderId: "733626678703",
  appId: "1:733626678703:web:113f117635bc53e8d2835a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()