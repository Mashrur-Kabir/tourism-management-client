// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVaj0plQFtDcvqi6Ao14QR2O_EKAW6AXA",
  authDomain: "tourism-management-b4381.firebaseapp.com",
  projectId: "tourism-management-b4381",
  storageBucket: "tourism-management-b4381.firebasestorage.app",
  messagingSenderId: "48044291627",
  appId: "1:48044291627:web:07f48535e55ad286539c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app
export default app;