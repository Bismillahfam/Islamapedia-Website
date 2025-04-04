import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Title from "./Title.jsx";
import MenuList from "./MenuList.jsx";
import BackgroundVid from "./BackgroundVid.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgUpxkZ_soH8O2osTiN6qLZXLqvwVdO2E",
  authDomain: "islamapedia-a43d7.firebaseapp.com",
  projectId: "islamapedia-a43d7",
  storageBucket: "islamapedia-a43d7.firebasestorage.app",
  messagingSenderId: "590204114129",
  appId: "1:590204114129:web:8b5faf113661c7bf4de1f0",
  measurementId: "G-VGJTKTL5EM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default { auth };

console.log(app);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BackgroundVid />
  </StrictMode>
);
