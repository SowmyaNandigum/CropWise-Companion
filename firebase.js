// firebase.js
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbE460DB6kawzfrQoL2YabrWcuUkM9pMQ",
    authDomain: "visit-farm.firebaseapp.com",
    projectId: "visit-farm",
    storageBucket: "visit-farm.appspot.com",
    messagingSenderId: "917627931081",
    appId: "1:917627931081:web:dd5ab4501a76c101b38018"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Export the db to be used in other modules



