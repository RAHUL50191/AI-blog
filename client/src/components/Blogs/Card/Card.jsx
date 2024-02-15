import React, { useEffect } from 'react';
// import image from "../../../assets/image.jpg"
import AOS from "aos"
import "aos/dist/aos.css";
// import Popup from './Popup/Popup';
import { Link } from 'react-router-dom';
export default function Card({darkMode,data,i}) {
 
    useEffect(() => {
        AOS.init();
      }, []);

    
    
     
  return (
    <div>
<div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
className={`${darkMode? " bg-gray-800 border-gray-700":"bg-white border-gray-200 "} max-sm border rounded-lg shadow  transition-transform duration-300 ease-in-out transform hover:scale-x-105`}>
  <Link to="#" className=''>
    <span className='absolute inset-0  bg-opacity-[20%] top-[5%] px-2 h-6 w-fit bg-white'>{data.date}</span>
        <img class="rounded-t-lg bg-cover h-[140px] md:h-[216px] min-w-full" src={data.image} alt=""/>
    </Link>
    <div className={`${darkMode?"bg-gradient-to-t from-gray-500 via-slate-700  to-gray-900":" bg-gradient-to-b from-white via-slate-200  to-gray-300"} p-5`}>
        <Link to="#">
            <h5 class={`mb-2 text-2xl font-bold tracking-tight  max-h-[4.2rem] overflow-hidden   ${darkMode?"text-white":"text-gray-900"}  `}>{data.title}
            </h5> 
         
        </Link>
        <h5 class={`mb-2 text-sm  tracking-tight overflow-hidden ${darkMode?"text-white":"text-gray-900"}  text-right inline-block`}>- {data.author}</h5>
        <p class={`mb-3 font-normal max-h-[4.2rem] overflow-hidden ${darkMode?"dark:text-gray-400":"text-gray-700"}  `}>{data.content} 2021 so far, in reverse chronological order.</p>
        <button
      to="#"  
      className={`text-white ${darkMode ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : ""} inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 relative overflow-hidden`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <span className="z-10 relative">Read more</span>
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </button>
    </div>
   
</div>

    </div>
  )
}
