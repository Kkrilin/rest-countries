import {useState, createContext } from "react";
// import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import Filter from "./components/Filter";
// import CountryCard from "./cards/CountryCard";
// import Loading from "./components/Loading";
// import Sort from "./components/Sort";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ThemeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{ mode, setMode }}>
        <Header />
      </ThemeContext.Provider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
