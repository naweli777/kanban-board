import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // Paste your Firebase config here
   };
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   // Initialize Firestore and export it
   export const db = getFirestore(app);