import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Auth from "./views/Auth";
import Dash from "./views/Dash";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  useEffect(() => {
    setTheme("dark");
    document.documentElement.setAttribute("data-theme", "dark");

    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }
    console.log(theme);
  }, [theme, setTheme]);

  return (
    <div className="w-full flex flex-col h-full">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Dash />} />
      </Routes>
    </div>
  );
}

export default App;
