import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"
// import logo from "../../assets/logo.gif"
export default function Navbar({darkMode, setDarkMode}) {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleDarkMode = () => {
    setIsSpinning(true); // Trigger spinning animation
    setDarkMode(!darkMode); // Toggle dark mode

    // Reset spinning animation after 1 second
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  return (
    
      <nav className={` ${darkMode ? "bg-black dark:bg-gray-900 dark:border-gray-700" : 'bg-white border-gray-200 '} z-10 max-h-[65rem] sticky top-0`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className={`self-center text-2xl font-semibold whitespace-nowrap ${darkMode ? 'text-white' : 'text-black'}`}>AI Blog</span>
          </Link>
          <button onClick={toggleDarkMode} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
            ${darkMode ? " dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" : 'bg-gray-50 md:bg-white'} md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 `}>
              <li>
                <a href="#home" className={`block py-2 px-3 ${darkMode ? 'text-white bg-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100'} rounded md:bg-transparent md:text-blue-700 md:p-0 `} aria-current="page">Home</a>
              </li>
              <li>
                <a href="#blogs" className={`block py-2 px-3 ${darkMode ? 'text-white' : 'text-gray-900 hover:bg-gray-100'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Blogs</a>
              </li>
              <li>
                <a href="#subscription" className={`block py-2 px-3 ${darkMode ? 'text-white' : 'text-gray-900 hover:bg-gray-100'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Subscription</a>
              </li>
              <li className={`block py-2 px-3 ${darkMode ? 'text-white' : 'text-gray-900 hover:bg-gray-100'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}> 
                <button onClick={toggleDarkMode}>
                  <i className={`${darkMode ? 'fa-solid fa-moon':"fa-regular fa-sun"} cursor-pointer ${isSpinning ? 'spin' : ''}`}></i>
                </button>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
     
  
  );
}
