// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADAqnIrLDg3FhMy6WvESLct8p9_zXJxqA",
  authDomain: "wavelength-411fd.firebaseapp.com",
  projectId: "wavelength-411fd",
  storageBucket: "wavelength-411fd.firebasestorage.app",
  messagingSenderId: "345338730902",
  appId: "1:345338730902:web:9aa4743d785c36bd6125b7",
  measurementId: "G-PC3YW619EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);