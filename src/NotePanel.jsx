import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { fetchNotes } from "./NoteFunctions.jsx";
import ReactMarkdown from "react-markdown";

export default function NotePanel() {
  const { user, db, notes, setNotes } = useContext(GlobalContext);

  useEffect(() => {
    fetchNotes(user, db, setNotes, true);
  }, [db, user]);
  return (
    <div className="w-[32rem] p-10 rounded-3xl shadow-2xl h-auto border-8 border-double border-blue-200 dark:bg-[#1d133a] dark:border-white dark:border bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center font-serif dark:text-white text-blue-950">
        My Notes:
      </h2>
      <ul className="flex flex-col gap-4">
        {notes.length === 0 ? (
          <h3 className="text-lg font-semibold text-center text-grey-500 dark:text-white opacity-40">
            You have not made any notes yet.
          </h3>
        ) : (
          notes.map((note) => (
            <li
              key={note.id}
              className="p-4 border-2 border-blue-200 dark:text-white dark:bg-[#1a0a26] dark:border-black rounded-xl shadow bg-white"
            >
              <h3 className="font-semibold text-lg dark:text-white text-blue-950">
                {note.title}
              </h3>
              <div className="dark:text-white dark:opacity-70 text-gray-700">
                <ReactMarkdown>{note.body}</ReactMarkdown>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
