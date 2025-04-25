import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import NoteEditor from "./NoteEditor";
import NoteSearch from "./NoteSearch";

export default function Menu({ items }) {
  const { user, db, setNotes } = useContext(GlobalContext);
  const [showEditor, setShowEditor] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Menu */}
      <div className="w-[28rem] p-10 rounded-3xl shadow-2xl h-auto flex flex-col items-center gap-8 border-8 border-double border-blue-200 bg-gray-100">
        {/* Add Note */}
        <button
          className="group relative text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 bg-white border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center"
          onClick={() => setShowEditor(true)}
        >
          {items[0]}
        </button>

        {/* Search */}
        <button
          className="group relative text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 bg-white border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center"
          onClick={() => setShowSearch(true)}
        >
          {items[1]}
        </button>

        {/* Support */}
        <a
          href="https://buy.stripe.com/6oE15pgZy1eLfLObII"
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group relative bg-white text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center">
            {items[2]}
          </button>
        </a>
      </div>

      {/* Modals OUTSIDE of the Menu */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#e2c9b0] p-2 rounded-2xl w-[90%] h-[90%] shadow-2xl">
            <NoteEditor onClose={() => setShowEditor(false)} />
          </div>
        </div>
      )}

      {showSearch && <NoteSearch onClose={() => setShowSearch(false)} />}
    </>
  );
}
