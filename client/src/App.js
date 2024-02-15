import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
import Subscription from "./components/Subsrciption/Subscription";
import FAQ from "./components/Faq/Faq";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Blogs darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <div id="subscription" darkMode={darkMode} className={`${darkMode ? "bg-gray-700" : "bg-white"} w-full h-[5rem]`}></div>
      <Subscription darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
