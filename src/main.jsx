import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalProvider } from "./GlobalContext.jsx";
import "./index.css";

// Import components
import Title from "./Title.jsx";
import Menu from "./Menu.jsx";
import AuthButton from "./AuthButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <div className="bg-[#f4f4d9] min-h-screen">
        <Title />
        <Menu items={["Add a Note", "Search Notes", "Donate"]} />
        <AuthButton />
      </div>
    </GlobalProvider>
  </StrictMode>
);
