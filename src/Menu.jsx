// Import context
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

// Menu component
export default function Menu({ items }) {
  const { user, setUser } = useContext(GlobalContext);

  // Return a list of 3 buttons from the items prop
  return (
    // Add Note button adds a note to the database
    <div className="w-96 bg-primary rounded-br-lg shadow-lg p-6 flex flex-col items-center gap-4">
      <button className="bg-secondary text-black font-bold py-2 px-4 rounded-lg w-full hover:scale-105 transition-transform duration-300">
        {items[0]}
      </button>
      <button className="bg-secondary text-black font-bold py-2 px-4 rounded-lg w-full hover:scale-105 transition-transform duration-300">
        {items[1]}
      </button>

      <a
        href="https://buy.stripe.com/6oE15pgZy1eLfLObII"
        className="w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-secondary text-black font-bold py-2 px-4 rounded-lg w-full hover:scale-105 transition-transform duration-300">
          {items[2]}
        </button>
      </a>
    </div>
  );
}
