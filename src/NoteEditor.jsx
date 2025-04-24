import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { addNote, fetchNotes } from "./NoteFunctions";
import ReactMarkdown from "react-markdown";

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

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 bg-white p-4 rounded-xl shadow-lg space-y-4"
    >
      <input
        className="w-full border p-2 rounded"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2 rounded h-32"
        placeholder="Write in Markdown..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <div className="border p-2 bg-gray-50 rounded max-h-40 overflow-y-auto">
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:text-black"
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
  );
}
