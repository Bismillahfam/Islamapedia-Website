import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { addNote, fetchNotes } from "./NoteFunctions";
import ReactMarkdown from "react-markdown";
import AuthButton from "./AuthButton";

export default function NoteEditor({ onClose }) {
  const { user, db, setNotes } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    await addNote(
      user,
      {
        title,
        body,
        date: new Date().toLocaleDateString(),
        author: user.displayName,
      },
      db
    );

    await fetchNotes(user, db, setNotes, true);
    setSaving(false);
    onClose(); // Close editor
  };

  if (user) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#e2c9b0] dark:text-white dark:bg-[#0e0624] p-2 rounded-2xl w-[90%] h-[90%] shadow-2xl">
          <form
            onSubmit={handleSubmit}
            className="my-4 mx-4 bg-white p-4 rounded-xl h-[95%] dark:bg-[#0e0624] dark:border-none border-blue-200 border-8 shadow-lg space-y-4"
          >
            <input
              className="w-full border p-2 rounded dark:bg-black"
              placeholder="Note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              className="dark:bg-black w-full border p-2 rounded h-[35%]"
              placeholder="Write in Markdown..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />

            <h3 className="text-lg font-semibold text-blue-950 dark:text-slate-400">
              Preview:
            </h3>
            <div className="border p-2 bg-gray-50 rounded max-h-40 dark:bg-black overflow-y-auto">
              <h4 className="font-semibold text-lg text-blue-950 dark:text-slate-400">
                {title}
              </h4>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg shadow-lg bg-red-600 p-2 text-white hover:bg-red-700 duration-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl"
              >
                {saving ? "Saving..." : "Add Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-[#e2c9b0] p-8 rounded-2xl w-[50%] h-[15%] shadow-2xl flex flex-col justify-center items-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-red-500 font-bold text-3xl hover:text-red-700"
          >
            ✕
          </button>

          {/* Message */}
          <h1 className="text-3xl font-bold text-blue-950 text-center">
            Please log in to add notes.
          </h1>
        </div>
      </div>
    );
}
