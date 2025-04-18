import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Title from "./Title.jsx";
import { GlobalProvider } from "./GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <Title />
    </GlobalProvider>
  </StrictMode>
);
