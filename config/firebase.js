// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRBwTgnU9MilLQX71idP_PV13khmYGQjI",
  authDomain: "fer201m-b1948.firebaseapp.com",
  projectId: "fer201m-b1948",
  storageBucket: "fer201m-b1948.appspot.com",
  messagingSenderId: "60444087175",
  appId: "1:60444087175:web:ca734aaa0287f3c218f922",
  measurementId: "G-H8VC6M8RLX",
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default db;
