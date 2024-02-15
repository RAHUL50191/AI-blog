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
    
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}>
 
      <section id="blog" className="py-0 px-6 sm:px-6 lg:px-8">
        <div className="max-w-[65rem] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center ">Top Tranding AI Blogs</h2>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog,i) => {
                if(i>9) return null;
                return  <div className={`transition-transform duration-300 ease-in-out transform hover:scale-105`}>
                    <Card darkMode={darkMode} data={blog} i={i}/>
                </div>
                })
            }
          </div>
        </div>
      </section>
    </div>
  );
};
 


export default FeaturedBlogs
