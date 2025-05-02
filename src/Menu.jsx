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
      <div className="w-[28rem] p-10 rounded-3xl shadow-2xl h-auto flex flex-col items-center gap-8 border-8 border-double dark:border-white dark:bg-[#1d133a] dark:border dark:bg- border-blue-200 bg-gray-100">
        {/* Add Note */}
        <button
          className="group relative text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 bg-white dark:text-white dark:bg-[#1a0a26] border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center"
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
      {showEditor && <NoteEditor onClose={() => setShowEditor(false)} />}

      {showSearch && <NoteSearch onClose={() => setShowSearch(false)} />}
    </>
  );
}
