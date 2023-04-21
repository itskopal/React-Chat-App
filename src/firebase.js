import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfO40AOpTRWfdlzrzctTDUhBOrypUfV8c",
  authDomain: "chat-app-83e40.firebaseapp.com",
  projectId: "chat-app-83e40",
  storageBucket: "chat-app-83e40.appspot.com",
  messagingSenderId: "181815147774",
  appId: "1:181815147774:web:3adc66bbdd52c17fb1b9af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
//export const db = getFirestore(app); 

