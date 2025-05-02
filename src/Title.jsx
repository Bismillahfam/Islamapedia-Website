import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

// Title.jsx
export default function Title() {
  const { dark } = useContext(GlobalContext);

  return (
    <div className={`${dark && "dark"}`}>
      <div className="relative top-12 w-[70%] h-64 bg-[url(/assets/Arabic_Caligraphy.jpeg)] bg-[center_-5%] px-10 py-12 rounded-[30rem] shadow-2xl border-8 border-black dark:border border-double mx-auto mt-10 overflow-hidden animate-scroll-right bg-repeat-x">
        <div className="relative z-10 text-center bg-gray-200 dark:bg-[#0e0624] rounded-full w-full h-full flex flex-col items-center justify-center opacity-90">
          <h1 className="text-6xl font-extrabold font-serif text-blue-950 dark:text-white">
            Islamapedia
          </h1>
          <p className="text-xl opacity-80 m-4 font-sans text-blue-950 dark:text-white">
            A Vault of Islamic Knowledge
          </p>
        </div>
      </div>
    </div>
  );
}
