import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBGDV5yE579hsyBz5WJeBVk6EZeJam2J5s",
  authDomain: "hotel-app-3453e.firebaseapp.com",
  projectId: "hotel-app-3453e",
  storageBucket: "hotel-app-3453e.appspot.com",
  messagingSenderId: "96944519921",
  appId: "1:96944519921:web:7bd806f88b8680883a0750",
  measurementId: "G-X5P8TG1CLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth}