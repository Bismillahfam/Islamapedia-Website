import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import NoteEditor from "./NoteEditor"; // import this

export default function Menu({ items }) {
  const { user, db, setNotes } = useContext(GlobalContext);
  const [showEditor, setShowEditor] = useState(false); // toggle editor

  return (
    <div className="w-[28rem] p-10 rounded-3xl shadow-2xl h-auto flex flex-col items-center gap-8 border-8 border-double border-blue-200 bg-gray-100">
      <button
        className="group relative text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 bg-white border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center"
        onClick={() => setShowEditor(true)}
      >
        <span className="relative">
          {items[0]}
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-950 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </button>

      <button className="group relative text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 bg-white border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center">
        <span className="relative">{items[1]}</span>
      </button>

      <a
        href="https://buy.stripe.com/6oE15pgZy1eLfLObII"
        className="w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group relative bg-white text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center">
          <span className="relative">{items[2]}</span>
        </button>
      </a>

      {showEditor && (
        <div className="w-full">
          <NoteEditor onClose={() => setShowEditor(false)} />
        </div>
      )}
    </div>
  );
}
