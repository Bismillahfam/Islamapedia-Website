import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalProvider } from "./GlobalContext.jsx";
import "./index.css";

// Import components
import Title from "./Title.jsx";
import AuthButton from "./AuthButton.jsx";
import DashboardLayout from "./Dasboard.jsx";
import DarkButton from "./DarkButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <div className="bg-[#faf0e6] min-h-screen">
        <DarkButton />
        <Title />
        <DashboardLayout />
        <AuthButton />
      </div>
    </GlobalProvider>
  </StrictMode>
);
