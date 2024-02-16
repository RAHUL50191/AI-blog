import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AI from "../AI/AI";
import tv from "../../assets/tv.png"
import a from "../../assets/apple.png"
export default function Home({ darkMode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="home" className={`${!darkMode ? "bg-white " : "bg-gray-700"} `}>
      <div className="gap-16 items-center  px-6 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6 md:min-h-[95vh]  max-h-[65rem]">
        <div
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
          data-aos-delay="1000"
          data-aos-duration="2000"
          className={`${
            darkMode
              ? "text-gray-400 font-[300] text-2xl"
              : "text-gray-300 font-thin "
          } sm:text-lg  `}
        >
          <h2
          
            className={`mb-4 text-2xl md:text-4xl lg:text-6xl tracking-wide font-bold ${
              !darkMode ? "text-gray-900" : "text-white" 
            } bebas-neue-bold`}
          >
            Unlocking the Future: The Latest Breakthroughs in Artificial
            Intelligence
          </h2>
          <p data-aos-delay="2000" className={`mb-4  text-md lg:text-xl tracking-wider ${darkMode?"text-slate-200":"text-black "} `}>
            Catch up on the latest in artificial intelligence with our
            insightful blog. Delve into cutting-edge research, real-world
            applications, and thought-provoking discussions. Whether you're a
            novice or an expert, our content has something for everyone
            interested in the fascinating world of AI
          </p>
          {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
        </div>
        <div className=" grid grid-cols-2 gap-4 mt-8 ">
          <img
            className="w-full rounded-lg min-[350px]:h-[240px] min-[500px]:h-[360px]  lg:h-[361px]"
            // src={a}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          />
          <img
            className=" w-full lg:mt-10 rounded-lg min-[350px]:h-[240px] min-[500px]:h-[360px]  lg:h-[361px]"
            src={tv}
            // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
}
