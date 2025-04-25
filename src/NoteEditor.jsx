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
      className="my-4 mx-4 bg-white p-4 rounded-xl h-[95%] border-blue-200 border-8 shadow-lg space-y-4"
    >
      <input
        className="w-full border p-2 rounded"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2 rounded h-[35%]"
        placeholder="Write in Markdown..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <h3 className="text-lg font-semibold text-blue-950">Preview:</h3>
      <div className="border p-2 bg-gray-50 rounded max-h-40 overflow-y-auto">
        <h4 className="font-semibold text-lg text-blue-950">{title}</h4>
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
  );
}
