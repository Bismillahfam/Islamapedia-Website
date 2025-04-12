import { db } from "./main.jsx";
import { webUser } from "./AuthenticationBtn.jsx";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import Title from "./Title.jsx";

// Function recieves the title, body and references.
// Then makes it suitable for the addNote function.
function compressData(title, body, references) {
  const noteData = {
    Title: title,
    author: webUser.email,
    CreatedAt: new Date(),
    Body: body,
    References: references,
  };
  return noteData;
}

// Function to add a note to the Firestore database.
function addNote(noteData) {
  // Check if the user is authenticated
  if (webUser == null) {
    alert("Please sign in to add a note.");
    return;
  } else {
    console.log("Passed Auth Stage!");
  }

  // Sends to Firestore
  try {
    addDoc(collection(db, "Notes"), noteData);
  } catch (error) {
    console.error("Error adding note: ", error);
    return;
  }

  return console.log("Note added successfully with data: ", noteData);
}

export { compressData, addNote };
