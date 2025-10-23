// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo34vwp-gVNBl-CsNQ_O5oaWUfLTxHsJI",
  authDomain: "play-scope.firebaseapp.com",
  projectId: "play-scope",
  storageBucket: "play-scope.firebasestorage.app",
  messagingSenderId: "463511451811",
  appId: "1:463511451811:web:9ccc252fcd2cd6d0ab6716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;