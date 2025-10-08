// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, writeBatch, doc, getDocs, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9GrWVPt6ktlEc3pW7GT-qGaLhtubPx_M",
  authDomain: "cojos-fantasy.firebaseapp.com",
  databaseURL: "https://cojos-fantasy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cojos-fantasy",
  storageBucket: "cojos-fantasy.firebasestorage.app",
  messagingSenderId: "70043218957",
  appId: "1:70043218957:web:0db6f8c2db4bc84498d144",
  measurementId: "G-73B6SQTL6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
export { collection, writeBatch, doc, getDocs, deleteDoc };
