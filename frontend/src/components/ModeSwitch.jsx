import { useState, useEffect } from "react";
import { Sun, Moon } from "react-bootstrap-icons";

function ModeSwitch() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    document.body.classList.toggle("light");

    const isLightMode = document.body.classList.contains("light");

    if (isLightMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const isLightMode = document.body.classList.contains("light");

    if (isLightMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

  return (
    <div className="bg-bgSecondary p-2 w-max fixed bottom-[2em] right-[2em]">
      {theme === "dark" ? (
        <Sun className="text-[2rem]" onClick={toggleTheme} />
      ) : (
        <Moon className="text-[2rem]" onClick={toggleTheme} />
      )}
    </div>
  );
}

export default ModeSwitch;
