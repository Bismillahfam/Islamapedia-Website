// Import context
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

export default function Menu({ items }) {
  // Use the context
  const { user, setUser } = useContext(GlobalContext);

  // Return a list of 3 buttons from the items prop
  return (
    <div className="w-96 h-auto bg-primary rounded-br-lg shadow-lg flex flex-col items-center justify-center">
      <button className="bg-secondary text-black font-bold py-2 rounded-lg mb-4 w-[90%] hover:scale-105 transition-transform duration-300">
        {items[0]}
      </button>
      <button className="bg-secondary text-black font-bold py-2 rounded-lg mb-4 w-[90%] hover:scale-105 transition-transform duration-300">
        {items[1]}
      </button>
      <button className="bg-secondary text-black font-bold py-2 rounded-lg mb-4 w-[90%] hover:scale-105 transition-transform duration-300">
        {items[2]}
      </button>
    </div>
  );
}
