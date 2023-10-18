import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const HandleModeClick = (e) => {
    if (e.target.dataset.mode === "dark") {
      console.log();
      setMode("dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
    } else if (e.target.dataset.mode === "light") {
      setMode("light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
    }
  };
  return (
    <header className="heading p-3 d-flex justify-content-between align-items-center">
      <h1>Where in the world</h1>
      <div
        onClick={HandleModeClick}
        className="mode d-flex align-items-center px-2"
      >
        {mode === "light" ? (
          <>
            <i className="bi bi-moon-stars-fill px-2"></i>
            <p className="px-2" data-mode="dark">
              Dark Mode
            </p>
          </>
        ) : (
          <>
            <i className="bi bi-brightness-high-fill px-2"></i>
            <p className="px-2" data-mode="light">
              Light Mode
            </p>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
