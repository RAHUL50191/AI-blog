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
// import im from "./Card/N-1.jpg"
import Card from './Card/Card';

const Blogs = ({darkMode}) => {
  const blogs = [
    {
      id: 1,
      title: "Understanding AI: A Beginner's Guide",
      date: "February 10, 2024",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna nec diam consequat fringilla. Mauris vestibulum nulla vel sem commodo, eu tincidunt risus tristique.",
      
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "February 5, 2024",
      author: "Jane Smith",
      content: "Nulla facilisi. Mauris auctor euismod lorem, a ultricies ligula tempor eu. Duis dignissim lorem nec neque consectetur, a ultrices leo tincidunt."
    },
   
    // Add more blogs as needed
  ];

  return (
    
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}>
      {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="0.5" d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,128C840,171,960,245,1080,234.7C1200,224,1320,128,1380,80L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      <section id="blog" className="py-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[65rem] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center ">Top Tranding AI Blogs</h2>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map(blog => {return  <div className={`transition-transform duration-300 ease-in-out transform hover:scale-105`}>
            <Card darkMode={darkMode} data={blog}/>
            </div>
})}
          </div>
        </div>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="0.5" d="M0,256L120,261.3C240,267,480,277,720,282.7C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
    </div>


//



  );
};

export default Blogs;
