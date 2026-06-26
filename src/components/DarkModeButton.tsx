import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const DarkModeButton = () => {
  const [themeStatus, setThemeStatus] = useState<"light" | "dark">(
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  const setTheme = (newTheme: "light" | "dark") => {
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setThemeStatus(newTheme);
  };

  return (
    <button
      className="select-none cursor-pointer"
      onClick={() => setTheme(themeStatus === "light" ? "dark" : "light")}
    >
      {themeStatus === "light" ? <Moon /> : <Sun color="yellow" />}
    </button>
  );
};

export default DarkModeButton;
