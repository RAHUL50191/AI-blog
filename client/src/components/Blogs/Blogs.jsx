// import React from 'react'

// export default function Blogs({darkMode}) {

  
//   return (
//     <div className={`${!darkMode ? "bg-white " : "bg-gray-700"}`}>
//       <section id="blogs" className="pt-24">
        
//       </section>
      
//       <div className={``}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fffff" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,165.3C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg></div>
//       <section className='container'>
//           {/* <div className='flex text-2xl font-bold py-2  justify-center w-full'>Hello</div> */}
//       </section>
//     </div>
//   )
// }

import React from 'react';
// import im from "./Card/.jpg"
import Card from './Card/Card';

const Blogs = ({darkMode}) => {
  const blogs = [
    {
      id: 1,
      title: "Understanding AI: A Beginner's Guide",
      date: "February 10, 2024",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna nec diam consequat fringilla. Mauris vestibulum nulla vel sem commodo, eu tincidunt risus tristique.",
      image:"https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Understanding AI: A Beginner's Guide",
      date: "February 10, 2024",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna nec diam consequat fringilla. Mauris vestibulum nulla vel sem commodo, eu tincidunt risus tristique.",
      image:"https://images.pexels.com/photos/17485679/pexels-photo-17485679/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidia-dias.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Understanding AI: A Beginner's Guide",
      date: "February 10, 2024",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna nec diam consequat fringilla. Mauris vestibulum nulla vel sem commodo, eu tincidunt risus tristique.",
      image:"https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      title: "Understanding AI: A Beginner's Guide",
      date: "February 10, 2024",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna nec diam consequat fringilla. Mauris vestibulum nulla vel sem commodo, eu tincidunt risus tristique.",
      image:"https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt.",
      image:"https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
   
    // Add more blogs as needed
  ];

  return (
    <section id='blogs' className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} `}>
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
    <div>
      <section id="blog" className="py-0 px-6 sm:px-6 lg:px-8  mb-6">
      
        <div className="max-w-[65rem] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center ">Top Tranding AI Blogs</h2>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog,i) => {if(i>9) return null;return  <div className={`transition-transform duration-300 ease-in-out transform hover:scale-105`}>
            <Card darkMode={darkMode} data={blog} i={i}/>
            
            </div>
})}
          </div>
        </div>
      </section>
      
      <svg id="wave" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 240" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243.986, 243.986, 243.986, 1)" offset="0%"></stop><stop stop-color="rgba(187.066, 186.918, 186.591, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)",opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,96L24,84C48,72,96,48,144,48C192,48,240,72,288,84C336,96,384,96,432,104C480,112,528,128,576,116C624,104,672,64,720,40C768,16,816,8,864,32C912,56,960,112,1008,124C1056,136,1104,104,1152,108C1200,112,1248,152,1296,156C1344,160,1392,128,1440,96C1488,64,1536,32,1584,48C1632,64,1680,128,1728,144C1776,160,1824,128,1872,96C1920,64,1968,32,2016,28C2064,24,2112,48,2160,84C2208,120,2256,168,2304,156C2352,144,2400,72,2448,40C2496,8,2544,16,2592,48C2640,80,2688,136,2736,148C2784,160,2832,128,2880,120C2928,112,2976,128,3024,140C3072,152,3120,160,3168,140C3216,120,3264,72,3312,44C3360,16,3408,8,3432,4L3456,0L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(93.718, 92.336, 91.893, 1)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 50px)", opacity:"0.9"}} fill="url(#sw-gradient-1)" d="M0,120L24,100C48,80,96,40,144,52C192,64,240,128,288,136C336,144,384,96,432,72C480,48,528,48,576,44C624,40,672,32,720,36C768,40,816,56,864,80C912,104,960,136,1008,140C1056,144,1104,120,1152,108C1200,96,1248,96,1296,104C1344,112,1392,128,1440,112C1488,96,1536,48,1584,36C1632,24,1680,48,1728,72C1776,96,1824,120,1872,132C1920,144,1968,144,2016,144C2064,144,2112,144,2160,156C2208,168,2256,192,2304,184C2352,176,2400,136,2448,116C2496,96,2544,96,2592,108C2640,120,2688,144,2736,148C2784,152,2832,136,2880,124C2928,112,2976,104,3024,100C3072,96,3120,96,3168,112C3216,128,3264,160,3312,152C3360,144,3408,96,3432,72L3456,48L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop><stop stop-color="rgba(225.772, 225.772, 225.772, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 100px)",opacity:"0.8"}} fill="url(#sw-gradient-2)" d="M0,120L24,108C48,96,96,72,144,52C192,32,240,16,288,24C336,32,384,64,432,100C480,136,528,176,576,180C624,184,672,152,720,152C768,152,816,184,864,196C912,208,960,200,1008,180C1056,160,1104,128,1152,96C1200,64,1248,32,1296,28C1344,24,1392,48,1440,60C1488,72,1536,72,1584,80C1632,88,1680,104,1728,108C1776,112,1824,104,1872,108C1920,112,1968,128,2016,128C2064,128,2112,112,2160,120C2208,128,2256,160,2304,176C2352,192,2400,192,2448,180C2496,168,2544,144,2592,112C2640,80,2688,40,2736,48C2784,56,2832,112,2880,148C2928,184,2976,200,3024,176C3072,152,3120,88,3168,68C3216,48,3264,72,3312,92C3360,112,3408,128,3432,136L3456,144L3456,240L3432,240C3408,240,3360,240,3312,240C3264,240,3216,240,3168,240C3120,240,3072,240,3024,240C2976,240,2928,240,2880,240C2832,240,2784,240,2736,240C2688,240,2640,240,2592,240C2544,240,2496,240,2448,240C2400,240,2352,240,2304,240C2256,240,2208,240,2160,240C2112,240,2064,240,2016,240C1968,240,1920,240,1872,240C1824,240,1776,240,1728,240C1680,240,1632,240,1584,240C1536,240,1488,240,1440,240C1392,240,1344,240,1296,240C1248,240,1200,240,1152,240C1104,240,1056,240,1008,240C960,240,912,240,864,240C816,240,768,240,720,240C672,240,624,240,576,240C528,240,480,240,432,240C384,240,336,240,288,240C240,240,192,240,144,240C96,240,48,240,24,240L0,240Z"></path></svg>
    </div>


</section>
  );
};

export default Blogs;
