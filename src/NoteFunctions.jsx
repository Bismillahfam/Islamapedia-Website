// Firebase imports
import {
  addDoc,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";

// adds a note to the database
async function addNote(user, note_data, db) {
  try {
    await addDoc(collection(db, "notes"), {
      uid: user.uid,
      title: note_data.title,
      body: note_data.body,
      date: note_data.date,
      author: user.displayName,
    });
    console.log("Note added successfully");
  } catch (error) {
    console.error("Error adding note: ", error);
  }
}

// fetches notes from the database
async function fetchNotes(user, db, setNotes, filterByUid = false) {
  if (filterByUid && (!user || !user.uid)) {
    setNotes([]); // Clear notes on logout if filtering by UID
    return;
  }

  try {
    let notesQuery;
    if (filterByUid) {
      notesQuery = query(collection(db, "notes"), where("uid", "==", user.uid));
    } else {
      notesQuery = collection(db, "notes"); // No filtering
    }

    const querySnapshot = await getDocs(notesQuery);
    const notesArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNotes(notesArray);
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
}

export { addNote, fetchNotes };
