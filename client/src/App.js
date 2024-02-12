import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Blogs darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
