import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Title from "./Title.jsx";
import MenuList from "./MenuList.jsx";
import GraphAnimation from "./GraphAnimation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-[#EAD7A2] to-[#C2A878] text-[#4A3B27] flex justify-center items-center">
      <Title />
      <MenuList Items={["Add a Note", "Search Vault", "Buy me a Coffee"]} />
      <GraphAnimation />
    </div>
  </StrictMode>
);
