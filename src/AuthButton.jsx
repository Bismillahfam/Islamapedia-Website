// React imports
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

// firebase imports
import { getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export default function AuthButton() {
  const { user, setUser, auth, db } = useContext(GlobalContext);

  async function login() {
    // Authorises the user with Google
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const signedInUser = result.user;
    setUser(signedInUser);
    console.log("User logged in:", signedInUser);

    // Sets the userdata for firestore
    const userRef = doc(db, "users", signedInUser.uid);
    const docSnap = await getDoc(userRef);

    // Check if user already exists
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        name: signedInUser.displayName,
        email: signedInUser.email,
        photoURL: signedInUser.photoURL,
      });
      console.log("User data saved to Firestore");
    } else {
      console.log("User already exists in Firestore");
    }
  }

  // Logs the user out and sets to null
  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  return (
    <button
      onClick={user ? logout : login}
      className="bg-primary text-black font-bold py-2 px-2 rounded-br-lg mb-4 w-auto transition-transform duration-300 hover:scale-x-105"
    >
      {user ? "Logout" : "Login with Google"}
    </button>
  );
}
