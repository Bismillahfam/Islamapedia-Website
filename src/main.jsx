import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Title from "./Title.jsx";
import MenuList from "./MenuList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Title />
    <MenuList Items={["Quran", "Hello", "Hi"]} />
  </StrictMode>
);
