// Import context
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

// Import functions
import { addNote, fetchNotes } from "./NoteFunctions.jsx";

// Menu component
export default function Menu({ items }) {
  const { user, db, setNotes } = useContext(GlobalContext);

  // Return a list of 3 buttons from the items prop
  return (
    // Add Note button adds a note to the database and re-fetches the notes
    <div className="w-[28rem] p-10 rounded-3xl shadow-2xl h-[24rem] flex flex-col items-center gap-8 border-8 border-double border-blue-200 bg-gray-100">
      <button
        className="group relative text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 bg-white border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center"
        onClick={() => {
          addNote(
            user,
            {
              title: "New Note",
              body: "This is a new note",
              date: new Date().toLocaleDateString(),
              author: user.displayName,
            },
            db
          );
          fetchNotes(user, db, setNotes);
        }}
      >
        <span className="relative">
          {items[0]}
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-950 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </button>

      <button className="group relative text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 bg-white border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center">
        <span className="relative">
          {items[1]}
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-950 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </button>

      <a
        href="https://buy.stripe.com/6oE15pgZy1eLfLObII"
        className="w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group relative bg-white text-blue-950 font-bold py-2 px-4 w-full h-16 border-4 border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center">
          <span className="relative">
            {items[2]}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-950 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </button>
      </a>
    </div>
  );
}
