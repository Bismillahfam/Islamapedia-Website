// React imports
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";
import { fetchNotes } from "./NoteFunctions";

// firebase imports
import { getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

function FirstLoginModal({ onSubmit }) {
  const [input, setInput] = useState("");

  return (
    <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="rounded-lg p-6 w-96 shadow-lg bg-blue-100 text-center">
        <h2 className="text-xl font-semibold mb-4 font-serif">
          What would you like to be known as?
        </h2>
        <input
          type="text"
          className="w-full border border-blue-300 rounded-lg px-4 py-2 mb-4 font-sans"
          placeholder="Enter your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => onSubmit(input)}
          className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-primary-dark font-sans"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

// AuthButton component
export default function AuthButton() {
  const { user, setUser, userName, setUserName, auth, db, setNotes } =
    useContext(GlobalContext);

  const [showModal, setShowModal] = useState(false);
  const [tempUser, setTempUser] = useState(null); // for holding the new user before name input

  async function login() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const signedInUser = result.user;

    const userRef = doc(db, "users", signedInUser.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      setTempUser(signedInUser); // temporarily store user
      setShowModal(true); // show modal for name input
    } else {
      setUser(signedInUser);
      setUserName(docSnap.data().name);
      console.log("User already exists in Firestore");
    }
  }

  async function handleNameSubmit(name) {
    if (!tempUser) return;

    const userRef = doc(db, "users", tempUser.uid);
    await setDoc(userRef, {
      name: tempUser.displayName,
      email: tempUser.email,
      photoURL: tempUser.photoURL,
      username: name,
    });

    setUser(tempUser);
    setUserName(name);
    setTempUser(null);
    setShowModal(false);
  }

  async function logout() {
    await signOut(auth);
    setUser(null);
    setUserName("");
    fetchNotes(null, db, setNotes, true); // Clear notes on logout
  }

  return (
    <div className="fixed top-4 right-4 flex items-center gap-3 z-40">
      {user && (
        <img
          src={
            user.photoURL ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.displayName || "User"
            )}&background=random`
          }
          alt="User Profile"
          className="w-10 h-10 rounded-full border border-blue-200 dark:border-white shadow"
        />
      )}
      <button
        onClick={user ? logout : login}
        className="text-black dark:text-white dark:border-[#1d133a] dark:hover:bg-[#1d133a] dark:bg-black font-bold font-serif py-2 px-4 rounded-lg transition-transform duration-300 border-2 border-blue-200 bg-blue-100 shadow-lg hover:bg-blue-200"
      >
        {user ? "Logout" : "Login with Google"}
      </button>

      {showModal && <FirstLoginModal onSubmit={handleNameSubmit} />}
    </div>
  );
}
