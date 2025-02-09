// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA546kjA8yzSsR20grBnDKioxYEr3j1wfo",
  authDomain: "buybusy-c8b2c.firebaseapp.com",
  projectId: "buybusy-c8b2c",
  storageBucket: "buybusy-c8b2c.firebasestorage.app",
  messagingSenderId: "889163900980",
  appId: "1:889163900980:web:fd1d610a24ff06435c4261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
