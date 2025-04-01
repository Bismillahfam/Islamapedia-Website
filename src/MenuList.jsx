import "./index.css";
import React from "react";

function MenuList(props) {
  const items = props.Items;

  return (
    <div className="bg-[#8C7750] text-white w-64 rounded-r-lg shadow-md p-4 fixed top-[144px] left-0">
      <ul className="text-lg font-semibold space-y-2">
        <li className="p-2 rounded-md hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-3">
          {items[0]}
        </li>
        <li className="p-2 rounded-md hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-3">
          {items[1]}
        </li>
        <li className="p-2 rounded-md hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-3">
          {items[2]}
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
