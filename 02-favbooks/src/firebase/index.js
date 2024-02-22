// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNxm0fpIKAkai4ftAyfBt06ExicqOflvs",
  authDomain: "your-library-app-293ac.firebaseapp.com",
  projectId: "your-library-app-293ac",
  storageBucket: "your-library-app-293ac.appspot.com",
  messagingSenderId: "76613179393",
  appId: "1:76613179393:web:cef77dd4d8f5466f714800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

console.log(app);