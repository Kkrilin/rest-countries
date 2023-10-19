import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);

  const HandleModeClick = () => {
    if (darkmode) {
      setDarkMode(false);
      document.querySelector("body").classList.remove("dark");
    } else {
      setDarkMode(true);
      document.querySelector("body").classList.add("dark");
    }
  };
  return (
    <header className="heading p-3 d-flex justify-content-between align-items-center">
      <h1>Where in the world</h1>
      <div
        onClick={HandleModeClick}
        className="mode d-flex align-items-center px-2"
      >
        {darkmode ? (
          <>
            <i className="bi bi-brightness-high-fill px-2"></i>
            <p className="px-2">Light Mode</p>
          </>
        ) : (
          <>
            <i className="bi bi-moon-stars-fill px-2"></i>
            <p className="px-2">Dark Mode</p>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
