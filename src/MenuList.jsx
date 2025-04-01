import "./index.css";
import React from "react";

function MenuList(props) {
  const items = props.Items;

  return (
    <div className="w-3/12 h-1/2 bg-[#8C7750] text-black rounded-tr-3xl shadow-xl p-8 fixed top-1/3 left-0 flex flex-col justify-center">
      <ul className="text-3xl font-semibold space-y-6">
        <li className="p-4 rounded-lg hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-5">
          {items[0]}
        </li>
        <li className="p-4 rounded-lg hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-5">
          {items[1]}
        </li>
        <li className="p-4 rounded-lg hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-5">
          {items[2]}
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
