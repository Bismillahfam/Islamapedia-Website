import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./main.jsx"; // Update this if needed

const provider = new GoogleAuthProvider();

function AuthenticationBtn() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("AUTH STATE CHANGED:", currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Logged in as:", result.user.displayName);
        console.log("User pfp: ", result.user.photoURL);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center gap-3">
      {user ? (
        <>
          <img
            src={
              user.photoURL ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                user.displayName || "User"
              )}&background=random`
            }
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300 shadow-md"
          />
          <button
            onClick={logout}
            className="px-4 py-2 bg-primaryDark text-black rounded-xl shadow-md hover:bg-primary transition"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={login}
          className="px-4 py-2 bg-primaryDark text-black rounded-xl shadow-md hover:bg-primary transition"
        >
          Login with Google
        </button>
      )}
    </div>
  );
}

export default AuthenticationBtn;
