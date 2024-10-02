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
    <section id='blogs' className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900 ' } pt-6 min-[750px]:px-4 min-[400px]:px-20  px-8`}>
      <section id="blog" className=" ">
      
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
      
     
    

 
</section>
  );
};

export default Blogs;
