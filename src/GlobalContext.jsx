// Imports react contexts.
import { createContext, useState, useRef } from "react";

// Import firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCgUpxkZ_soH8O2osTiN6qLZXLqvwVdO2E",
  authDomain: "islamapedia-a43d7.firebaseapp.com",
  projectId: "islamapedia-a43d7",
  storageBucket: "islamapedia-a43d7.firebasestorage.app",
  messagingSenderId: "590204114129",
  appId: "1:590204114129:web:8b5faf113661c7bf4de1f0",
  measurementId: "G-VGJTKTL5EM",
};

// Create the context
const GlobalContext = createContext();

// Export the context so other files can use it
export { GlobalContext };

// Create the provider component
export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);

  // Firebase should only initialize once
  const app = useRef(initializeApp(firebaseConfig));
  const analytics = useRef(getAnalytics(app.current));
  const auth = useRef(getAuth(app.current));
  const db = useRef(getFirestore(app.current));

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        auth: auth.current,
        db: db.current,
        analytics: analytics.current,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
