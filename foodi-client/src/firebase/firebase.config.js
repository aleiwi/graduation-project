// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6dXdoZWQ1FRVVvgQTVgXaSeDrTsRK4Zo",
  authDomain: "foodi-client-aeecb.firebaseapp.com",
  projectId: "foodi-client-aeecb",
  storageBucket: "foodi-client-aeecb.firebasestorage.app",
  messagingSenderId: "310637068622",
  appId: "1:310637068622:web:f9a36e8fb60c6e7225de1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app