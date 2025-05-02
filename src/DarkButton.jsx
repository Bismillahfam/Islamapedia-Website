import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export default function DarkButton() {
  const { dark, setDark } = useContext(GlobalContext);

  return (
    <div className={`${dark && "dark"}`}>
      <button
        className="group relative dark:text-white dark:bg-[#0e0624] dark:border-white text-blue-950 font-bold py-2 px-4 my-4 mx-4 w-24 h-24 border-4 bg-white border-blue-200 font-serif text-xl rounded-full duration-200 hover:bg-blue-200 flex justify-center items-center"
        onClick={() => setDark(!dark)}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
