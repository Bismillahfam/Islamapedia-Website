import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { fetchNotes } from "./NoteFunctions";
import ReactMarkdown from "react-markdown";

export default function NoteSearch({ onClose }) {
  const { user, db, notes, setNotes } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchNotes(user, db, setNotes);
  }, [db, user]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-[90%] h-[90%] bg-[#2f127e] rounded-3xl shadow-2xl flex gap-6 p-6 overflow-hidden">
        {/* Search sidebar */}
        <div className="w-1/3 max-w-sm p-6 rounded-3xl shadow-2xl border-8 border-double border-blue-200 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-blue-950 font-serif">
              Search Notes
            </h2>
            <button
              onClick={() => {
                onClose();
                setSearchTerm("");
                fetchNotes(user, db, setNotes, true);
              }}
              className="text-red-500 font-bold text-xl hover:text-red-700"
            >
              ✕
            </button>
          </div>
          <input
            type="text"
            placeholder="Search by title or body..."
            className="w-full p-3 border-2 border-blue-200 rounded-xl text-blue-950 font-serif text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="">
            <p className="text-gray-500 mt-4 text-lg">
              Search for notes made by other users and yourself. You can search
              by title or body and it is not case-sensitive.
            </p>
          </div>
        </div>

        {/* Search results */}
        <div className="flex-1 p-6 rounded-3xl shadow-2xl border-8 border-double border-black bg-gray-100 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-blue-950 font-serif text-center">
            Search Results
          </h2>
          {filteredNotes.length === 0 ? (
            <p className="text-blue-900 font-serif text-center">
              No notes match your search.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {filteredNotes.map((note) => (
                <li
                  key={note.id}
                  className="p-4 border-2 border-blue-200 rounded-xl shadow bg-white"
                >
                  <h3 className="font-semibold text-lg text-blue-950">
                    {note.title}
                  </h3>
                  <h4 className="text-sm text-gray-500">
                    Made on {note.date} by {note.author}
                  </h4>
                  <div className="text-gray-700">
                    <ReactMarkdown>{note.body}</ReactMarkdown>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
