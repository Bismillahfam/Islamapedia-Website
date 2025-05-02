// App.jsx
import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import Title from "./Title";
import AuthButton from "./AuthButton";
import DashboardLayout from "./Dasboard";
import DarkButton from "./DarkButton";

export default function App() {
  const { dark } = useContext(GlobalContext);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <DarkButton />
      <Title />
      <DashboardLayout />
      <AuthButton />
    </>
  );
}
