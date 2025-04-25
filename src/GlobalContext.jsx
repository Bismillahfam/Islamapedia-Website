import { createContext, useState, useEffect, useRef } from "react";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
export { GlobalContext };

// Provider component
export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [notes, setNotes] = useState([]);
  const [view, setView] = useState("menu");

  // Firebase should only initialize once
  const app = useRef(initializeApp(firebaseConfig));
  const analytics = useRef(getAnalytics(app.current));
  const auth = useRef(getAuth(app.current));
  const db = useRef(getFirestore(app.current));

  // Automatically update user on login/logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth.current, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setUserName(firebaseUser.displayName || "Anonymous"); // Optional
      } else {
        setUser(null);
        setUserName("");
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        userName,
        setUserName,
        auth: auth.current,
        db: db.current,
        analytics: analytics.current,
        notes,
        setNotes,
        view,
        setView,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
