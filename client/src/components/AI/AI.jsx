import React, { useEffect } from 'react';
import Spline from "@splinetool/react-spline";
import galaxy from "../../assets/galaxy.jpg";
import hello from "../../assets/Hello.wav"
function AI() {
  const audio = new Audio(hello);
    const playAudio = () => {
      audio.play();
  };
  useEffect(() => {
    
    return () => {
      audio.pause();
      audio.remove();
    };
  }, [playAudio]);


  return (
    <button 
      className={`bg-[${galaxy}] top-1/4 absolute md:top-4 opacity-50 w-50`} 
      onClick={playAudio}
    >
      <Spline scene="https://prod.spline.design/KCA4IyHDwx0kGKe2/scene.splinecode" data-aos="fade-up" />
    </button>
  );
}

export default AI;
