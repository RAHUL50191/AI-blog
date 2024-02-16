import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Subscription from "./components/Subsrciption/Subscription";
import FAQ from "./components/Faq/Faq";
import AI from "./components/AI/AI";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <AI />

      <Home darkMode={darkMode} />
      {darkMode ? (
        <svg
          id="wave"
          className="bg-slate-700"
          style={{
            transform: "rotate(180deg)",
            transition: "0.3s",
            width: "100%", // Make the SVG width responsive
            height: "auto", // Automatically adjust the height
          }}
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMinYMid meet"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* rgb(51 65 85) */}
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="rgba(0, 0, 0, 1)" offset="0%" /> {/* bg-slate-700 color */}
              <stop stopColor="rgba(55, 65, 85, 1)" offset="100%" /> {/* Black color */}
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,96L24,84C48,72,96,48,144,48C192,48,240,72,288,84C336,96,384,96,432,104C480,112,528,128,576,116C624,104,672,64,720,40C768,16,816,8,864,32C912,56,960,112,1008,124C1056,136,1104,104,1152,108C1200,112,1248,152,1296,156C1344,160,1392,128,1440,96C1488,64,1536,32,1584,48C1632,64,1680,128,1728,144C1776,160,1824,128,1872,96C1920,64,1968,32,2016,28C2064,24,2112,48,2160,84C2208,120,2256,168,2304,156C2352,144,2400,72,2448,40C2496,8,2544,16,2592,48C2640,80,2688,136,2736,148C2784,160,2832,128,2880,120C2928,112,2976,128,3024,140C3072,152,3120,160,3168,140C3216,120,3264,72,3312,44C3360,16,3408,8,3432,4L3456,0L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"
          ></path>
          {/* Add the other paths with their respective defs and styles here */}
        </svg>
      ) : (
        <svg
          id="wave"
          style={{
            transform: "rotate(180deg)",
            transition: "0.3s",
            width: "100%", // Make the SVG width responsive
            height: "auto", // Automatically adjust the height
          }}
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMinYMid meet"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243.986, 243.986, 243.986, 1)" offset="0%"></stop>
              <stop stopColor="rgba(187.066, 186.918, 186.591, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill={darkMode ? "white" : "url(#sw-gradient-0)"}
            d="M0,96L24,84C48,72,96,48,144,48C192,48,240,72,288,84C336,96,384,96,432,104C480,112,528,128,576,116C624,104,672,64,720,40C768,16,816,8,864,32C912,56,960,112,1008,124C1056,136,1104,104,1152,108C1200,112,1248,152,1296,156C1344,160,1392,128,1440,96C1488,64,1536,32,1584,48C1632,64,1680,128,1728,144C1776,160,1824,128,1872,96C1920,64,1968,32,2016,28C2064,24,2112,48,2160,84C2208,120,2256,168,2304,156C2352,144,2400,72,2448,40C2496,8,2544,16,2592,48C2640,80,2688,136,2736,148C2784,160,2832,128,2880,120C2928,112,2976,128,3024,140C3072,152,3120,160,3168,140C3216,120,3264,72,3312,44C3360,16,3408,8,3432,4L3456,0L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"
          ></path>
          {/* Add the other paths with their respective defs and styles here */}
        </svg>
      )}
      <Blogs darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <div id="subscription" darkMode={darkMode} className={`${darkMode ? "bg-gray-700" : "bg-white"} w-full h-[5rem]`}></div>
      <Subscription darkMode={darkMode} />
      {darkMode ? (
        <svg
          id="wave"
          className={`${darkMode ? "bg-gray-700" : "bg-white"}`}
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 330"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop>
              <stop stop-color="rgba(114.209, 114.209, 114.209, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,33L80,77C160,121,320,209,480,209C640,209,800,121,960,71.5C1120,22,1280,11,1440,55C1600,99,1760,198,1920,242C2080,286,2240,275,2400,269.5C2560,264,2720,264,2880,269.5C3040,275,3200,286,3360,291.5C3520,297,3680,297,3840,280.5C4000,264,4160,231,4320,231C4480,231,4640,264,4800,231C4960,198,5120,99,5280,55C5440,11,5600,22,5760,44C5920,66,6080,99,6240,110C6400,121,6560,110,6720,110C6880,110,7040,121,7200,154C7360,187,7520,242,7680,220C7840,198,8000,99,8160,99C8320,99,8480,198,8640,242C8800,286,8960,275,9120,258.5C9280,242,9440,220,9600,176C9760,132,9920,66,10080,33C10240,0,10400,0,10560,49.5C10720,99,10880,198,11040,220C11200,242,11360,187,11440,159.5L11520,132L11520,330L11440,330C11360,330,11200,330,11040,330C10880,330,10720,330,10560,330C10400,330,10240,330,10080,330C9920,330,9760,330,9600,330C9440,330,9280,330,9120,330C8960,330,8800,330,8640,330C8480,330,8320,330,8160,330C8000,330,7840,330,7680,330C7520,330,7360,330,7200,330C7040,330,6880,330,6720,330C6560,330,6400,330,6240,330C6080,330,5920,330,5760,330C5600,330,5440,330,5280,330C5120,330,4960,330,4800,330C4640,330,4480,330,4320,330C4160,330,4000,330,3840,330C3680,330,3520,330,3360,330C3200,330,3040,330,2880,330C2720,330,2560,330,2400,330C2240,330,2080,330,1920,330C1760,330,1600,330,1440,330C1280,330,1120,330,960,330C800,330,640,330,480,330C320,330,160,330,80,330L0,330Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop>
              <stop stop-color="rgba(121.04, 121.04, 121.04, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
            fill="url(#sw-gradient-1)"
            d="M0,165L80,176C160,187,320,209,480,192.5C640,176,800,121,960,110C1120,99,1280,132,1440,159.5C1600,187,1760,209,1920,192.5C2080,176,2240,121,2400,93.5C2560,66,2720,66,2880,66C3040,66,3200,66,3360,93.5C3520,121,3680,176,3840,176C4000,176,4160,121,4320,93.5C4480,66,4640,66,4800,104.5C4960,143,5120,220,5280,209C5440,198,5600,99,5760,99C5920,99,6080,198,6240,209C6400,220,6560,143,6720,132C6880,121,7040,176,7200,192.5C7360,209,7520,187,7680,181.5C7840,176,8000,187,8160,198C8320,209,8480,220,8640,192.5C8800,165,8960,99,9120,66C9280,33,9440,33,9600,49.5C9760,66,9920,99,10080,110C10240,121,10400,110,10560,132C10720,154,10880,209,11040,231C11200,253,11360,242,11440,236.5L11520,231L11520,330L11440,330C11360,330,11200,330,11040,330C10880,330,10720,330,10560,330C10400,330,10240,330,10080,330C9920,330,9760,330,9600,330C9440,330,9280,330,9120,330C8960,330,8800,330,8640,330C8480,330,8320,330,8160,330C8000,330,7840,330,7680,330C7520,330,7360,330,7200,330C7040,330,6880,330,6720,330C6560,330,6400,330,6240,330C6080,330,5920,330,5760,330C5600,330,5440,330,5280,330C5120,330,4960,330,4800,330C4640,330,4480,330,4320,330C4160,330,4000,330,3840,330C3680,330,3520,330,3360,330C3200,330,3040,330,2880,330C2720,330,2560,330,2400,330C2240,330,2080,330,1920,330C1760,330,1600,330,1440,330C1280,330,1120,330,960,330C800,330,640,330,480,330C320,330,160,330,80,330L0,330Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop>
              <stop stop-color="rgba(57.29, 57.29, 57.29, 0.99)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 100px)", opacity: "0.8" }}
            fill="url(#sw-gradient-2)"
            d="M0,0L80,0C160,0,320,0,480,38.5C640,77,800,154,960,154C1120,154,1280,77,1440,66C1600,55,1760,110,1920,143C2080,176,2240,187,2400,187C2560,187,2720,176,2880,176C3040,176,3200,187,3360,198C3520,209,3680,220,3840,187C4000,154,4160,77,4320,44C4480,11,4640,22,4800,66C4960,110,5120,187,5280,187C5440,187,5600,110,5760,93.5C5920,77,6080,121,6240,126.5C6400,132,6560,99,6720,88C6880,77,7040,88,7200,110C7360,132,7520,165,7680,187C7840,209,8000,220,8160,203.5C8320,187,8480,143,8640,115.5C8800,88,8960,77,9120,82.5C9280,88,9440,110,9600,137.5C9760,165,9920,198,10080,203.5C10240,209,10400,187,10560,198C10720,209,10880,253,11040,242C11200,231,11360,165,11440,132L11520,99L11520,330L11440,330C11360,330,11200,330,11040,330C10880,330,10720,330,10560,330C10400,330,10240,330,10080,330C9920,330,9760,330,9600,330C9440,330,9280,330,9120,330C8960,330,8800,330,8640,330C8480,330,8320,330,8160,330C8000,330,7840,330,7680,330C7520,330,7360,330,7200,330C7040,330,6880,330,6720,330C6560,330,6400,330,6240,330C6080,330,5920,330,5760,330C5600,330,5440,330,5280,330C5120,330,4960,330,4800,330C4640,330,4480,330,4320,330C4160,330,4000,330,3840,330C3680,330,3520,330,3360,330C3200,330,3040,330,2880,330C2720,330,2560,330,2400,330C2240,330,2080,330,1920,330C1760,330,1600,330,1440,330C1280,330,1120,330,960,330C800,330,640,330,480,330C320,330,160,330,80,330L0,330Z"
          ></path>
        </svg>
      ) : (
        <svg
          id="wave"
          className={`${darkMode ? "bg-gray-700" : "bg-white"}`}
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 330"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
              <stop stop-color="rgba(143.808, 143.808, 143.808, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,33L80,77C160,121,320,209,480,209C640,209,800,121,960,71.5C1120,22,1280,11,1440,55C1600,99,1760,198,1920,242C2080,286,2240,275,2400,269.5C2560,264,2720,264,2880,269.5C3040,275,3200,286,3360,291.5C3520,297,3680,297,3840,280.5C4000,264,4160,231,4320,231C4480,231,4640,264,4800,231C4960,198,5120,99,5280,55C5440,11,5600,22,5760,44C5920,66,6080,99,6240,110C6400,121,6560,110,6720,110C6880,110,7040,121,7200,154C7360,187,7520,242,7680,220C7840,198,8000,99,8160,99C8320,99,8480,198,8640,242C8800,286,8960,275,9120,258.5C9280,242,9440,220,9600,176C9760,132,9920,66,10080,33C10240,0,10400,0,10560,49.5C10720,99,10880,198,11040,220C11200,242,11360,187,11440,159.5L11520,132L11520,330L11440,330C11360,330,11200,330,11040,330C10880,330,10720,330,10560,330C10400,330,10240,330,10080,330C9920,330,9760,330,9600,330C9440,330,9280,330,9120,330C8960,330,8800,330,8640,330C8480,330,8320,330,8160,330C8000,330,7840,330,7680,330C7520,330,7360,330,7200,330C7040,330,6880,330,6720,330C6560,330,6400,330,6240,330C6080,330,5920,330,5760,330C5600,330,5440,330,5280,330C5120,330,4960,330,4800,330C4640,330,4480,330,4320,330C4160,330,4000,330,3840,330C3680,330,3520,330,3360,330C3200,330,3040,330,2880,330C2720,330,2560,330,2400,330C2240,330,2080,330,1920,330C1760,330,1600,330,1440,330C1280,330,1120,330,960,330C800,330,640,330,480,330C320,330,160,330,80,330L0,330Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(239.433, 239.433, 239.433, 1)" offset="0%"></stop>
              <stop stop-color="rgba(143.808, 143.808, 143.808, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
            fill="url(#sw-gradient-1)"
            d="M0,165L80,176C160,187,320,209,480,192.5C640,176,800,121,960,110C1120,99,1280,132,1440,159.5C1600,187,1760,209,1920,192.5C2080,176,2240,121,2400,93.5C2560,66,2720,66,2880,66C3040,66,3200,66,3360,93.5C3520,121,3680,176,3840,176C4000,176,4160,121,4320,93.5C4480,66,4640,66,4800,104.5C4960,143,5120,220,5280,209C5440,198,5600,99,5760,99C5920,99,6080,198,6240,209C6400,220,6560,143,6720,132C6880,121,7040,176,7200,192.5C7360,209,7520,187,7680,181.5C7840,176,8000,187,8160,198C8320,209,8480,220,8640,192.5C8800,165,8960,99,9120,66C9280,33,9440,33,9600,49.5C9760,66,9920,99,10080,110C10240,121,10400,110,10560,132C10720,154,10880,209,11040,231C11200,253,11360,242,11440,236.5L11520,231L11520,330L11440,330C11360,330,11200,330,11040,330C10880,330,10720,330,10560,330C10400,330,10240,330,10080,330C9920,330,9760,330,9600,330C9440,330,9280,330,9120,330C8960,330,8800,330,8640,330C8480,330,8320,330,8160,330C8000,330,7840,330,7680,330C7520,330,7360,330,7200,330C7040,330,6880,330,6720,330C6560,330,6400,330,6240,330C6080,330,5920,330,5760,330C5600,330,5440,330,5280,330C5120,330,4960,330,4800,330C4640,330,4480,330,4320,330C4160,330,4000,330,3840,330C3680,330,3520,330,3360,330C3200,330,3040,330,2880,330C2720,330,2560,330,2400,330C2240,330,2080,330,1920,330C1760,330,1600,330,1440,330C1280,330,1120,330,960,330C800,330,640,330,480,330C320,330,160,330,80,330L0,330Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
              <stop stop-color="rgba(159.745, 159.745, 159.745, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 100px)", opacity: "0.8" }}
            fill="url(#sw-gradient-2)"
            d="M0,0L80,0C160,0,320,0,480,38.5C640,77,800,154,960,154C1120,154,1280,77,1440,66C1600,55,1760,110,1920,143C2080,176,2240,187,2400,187C2560,187,2720,176,2880,176C3040,176,3200,187,3360,198C3520,209,3680,220,3840,187C4000,154,4160,77,4320,44C4480,11,4640,22,4800,66C4960,110,5120,187,5280,187C5440,187,5600,110,5760,93.5C5920,77,6080,121,6240,126.5C6400,132,6560,99,6720,88C6880,77,7040,88,7200,110C7360,132,7520,165,7680,187C7840,209,8000,220,8160,203.5C8320,187,8480,143,8640,115.5C8800,88,8960,77,9120,82.5C9280,88,9440,110,9600,137.5C9760,165,9920,198,10080,203.5C10240,209,10400,187,10560,198C10720,209,10880,253,11040,242C11200,231,11360,165,11440,132L11520,99L11520,330L11440,330C11360,330,11200,330,11040,330C10880,330,10720,330,10560,330C10400,330,10240,330,10080,330C9920,330,9760,330,9600,330C9440,330,9280,330,9120,330C8960,330,8800,330,8640,330C8480,330,8320,330,8160,330C8000,330,7840,330,7680,330C7520,330,7360,330,7200,330C7040,330,6880,330,6720,330C6560,330,6400,330,6240,330C6080,330,5920,330,5760,330C5600,330,5440,330,5280,330C5120,330,4960,330,4800,330C4640,330,4480,330,4320,330C4160,330,4000,330,3840,330C3680,330,3520,330,3360,330C3200,330,3040,330,2880,330C2720,330,2560,330,2400,330C2240,330,2080,330,1920,330C1760,330,1600,330,1440,330C1280,330,1120,330,960,330C800,330,640,330,480,330C320,330,160,330,80,330L0,330Z"
          ></path>
        </svg>
      )}

      {/* <svg
        id="wave"
        className={`${darkMode ? "bg-gray-700" : "bg-white"}`}
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 240"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="black" offset="0%"></stop>
            <stop stop-color="rgba(187.066, 186.918, 186.591, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill={darkMode ? "black" : "url(#sw-gradient-0)"}
          d="M0,96L24,84C48,72,96,48,144,48C192,48,240,72,288,84C336,96,384,96,432,104C480,112,528,128,576,116C624,104,672,64,720,40C768,16,816,8,864,32C912,56,960,112,1008,124C1056,136,1104,104,1152,108C1200,112,1248,152,1296,156C1344,160,1392,128,1440,96C1488,64,1536,32,1584,48C1632,64,1680,128,1728,144C1776,160,1824,128,1872,96C1920,64,1968,32,2016,28C2064,24,2112,48,2160,84C2208,120,2256,168,2304,156C2352,144,2400,72,2448,40C2496,8,2544,16,2592,48C2640,80,2688,136,2736,148C2784,160,2832,128,2880,120C2928,112,2976,128,3024,140C3072,152,3120,160,3168,140C3216,120,3264,72,3312,44C3360,16,3408,8,3432,4L3456,0L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(93.718, 92.336, 91.893, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
          fill={darkMode ? "" : "url(#sw-gradient-1)"}
          d="M0,120L24,100C48,80,96,40,144,52C192,64,240,128,288,136C336,144,384,96,432,72C480,48,528,48,576,44C624,40,672,32,720,36C768,40,816,56,864,80C912,104,960,136,1008,140C1056,144,1104,120,1152,108C1200,96,1248,96,1296,104C1344,112,1392,128,1440,112C1488,96,1536,48,1584,36C1632,24,1680,48,1728,72C1776,96,1824,120,1872,132C1920,144,1968,144,2016,144C2064,144,2112,144,2160,156C2208,168,2256,192,2304,184C2352,176,2400,136,2448,116C2496,96,2544,96,2592,108C2640,120,2688,144,2736,148C2784,152,2832,136,2880,124C2928,112,2976,104,3024,100C3072,96,3120,96,3168,112C3216,128,3264,160,3312,152C3360,144,3408,96,3432,72L3456,48L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="black" offset="0%"></stop>
            <stop stop-color="rgba(225.772, 225.772, 225.772, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 100px)", opacity: "0.8" }}
          fill={darkMode ? "gray" : "url(#sw-gradient-2)"}
          d="M0,120L24,108C48,96,96,72,144,52C192,32,240,16,288,24C336,32,384,64,432,100C480,136,528,176,576,180C624,184,672,152,720,152C768,152,816,184,864,196C912,208,960,200,1008,180C1056,160,1104,128,1152,96C1200,64,1248,32,1296,28C1344,24,1392,48,1440,60C1488,72,1536,72,1584,80C1632,88,1680,104,1728,108C1776,112,1824,104,1872,108C1920,112,1968,128,2016,128C2064,128,2112,112,2160,120C2208,128,2256,160,2304,176C2352,192,2400,192,2448,180C2496,168,2544,144,2592,112C2640,80,2688,40,2736,48C2784,56,2832,112,2880,148C2928,184,2976,200,3024,176C3072,152,3120,88,3168,68C3216,48,3264,72,3312,92C3360,112,3408,128,3432,136L3456,144L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"
        ></path>
      </svg> */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
