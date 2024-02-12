import AOS from 'aos';
import React, { useEffect, } from 'react'
import 'aos/dist/aos.css';
export default function Home({darkMode}) {
  

  useEffect(() => {
    AOS.init();
  }, []);

 
  return (
    <section id="home" className={`${darkMode?"bg-white":" bg-gray-700" }`}>
 
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div data-aos="fade-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className={`${darkMode?"text-gray-400 font-[300] text-2xl":"text-gray-300 font-thin "} sm:text-lg  `}>
            <h2 className={`mb-4 text-3xl tracking-tight font-bold ${darkMode?"text-gray-900": "text-white"}`}>Unlocking the Future: The Latest Breakthroughs in Artificial Intelligence</h2>
            <p className="mb-4">Catch up on the latest in artificial intelligence with our insightful blog. Delve into cutting-edge research, real-world applications, and thought-provoking discussions. Whether you're a novice or an expert, our content has something for everyone interested in the fascinating world of AI</p>
            {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
        </div>
        <div className="flex flex-wrap  min-[550px]:grid min-[550px]:grid-cols-2 min-[550px]:gap-4 min-[550px]:mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" data-aos="fade-down"  data-aos-easing="ease-in"
     data-aos-duration="1000" />
            <img className=" w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" data-aos="fade-up"  data-aos-easing="ease-out"
     data-aos-duration="1000" />
        </div>
    </div>
</section>
  
  )
}