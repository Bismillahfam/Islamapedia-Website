import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Title from "./Title.jsx";
import MenuList from "./MenuList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Title />
    <MenuList Items={["Add a Note", "Search Vault", "Buy me a Coffee"]} />
  </StrictMode>
);
