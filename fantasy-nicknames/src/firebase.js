// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxyPGcJPN8qHJ2paKQAauQT9sEqHszi5M",
  authDomain: "fantasy-nicknames.firebaseapp.com",
  databaseURL: "https://fantasy-nicknames-default-rtdb.firebaseio.com",
  projectId: "fantasy-nicknames",
  storageBucket: "fantasy-nicknames.appspot.com",
  messagingSenderId: "9438906342",
  appId: "1:9438906342:web:f0dee29648b23569f7f827",
  measurementId: "G-3PRWYS1HZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
