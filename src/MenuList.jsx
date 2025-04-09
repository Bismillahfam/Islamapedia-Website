import React, { useState } from "react";
import "./index.css";
import { auth } from "./main.jsx";
import { webUser } from "./AuthenticationBtn.jsx";
console.log("User: ", webUser);

function AddNote() {
  console.log("Add Note clicked");
  if (webUser == null) {
    alert("Please sign in to add a note.");
  } else {
    console.log("Add Note Successful");
  }
}

function MenuList(props) {
  const items = props.Items;
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState(null);

  return (
    <div className="bg-secondary text-black w-64 rounded-r-lg shadow-lg p-4 fixed top-[335px] left-0">
      <ul className="text-lg font-semibold space-y-2">
        <li
          onClick={AddNote}
          className="p-2 rounded-md hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-3"
        >
          {items[0]}
        </li>
        <li
          className="p-2 rounded-md hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-3 cursor-pointer"
          onClick={() => setIsSearchActive(true)}
        >
          {isSearchActive ? (
            <input
              className="text-black"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onBlur={() => setIsSearchActive(false)}
              autoFocus
            />
          ) : (
            items[1]
          )}
        </li>
        <li className="p-2 rounded-md hover:bg-[#6F6344] transition-all duration-300 transform hover:translate-x-3">
          {items[2]}
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
