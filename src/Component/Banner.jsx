import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = ({ data }) => {
  const slides = data.slice(0, 5); // First 5 games
  const [index, setIndex] = useState(0);

  // Autoplay every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[600px] sm:h-[500px] rounded-xl overflow-hidden  py-8 border-gray-600 border-1 my-6 rounded-2xl bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full"
        >
          <div className="mx-auto w-auto sm:w-[50%]  flex flex-col justify-center items-center  gap-5">
            <img
            src={slides[index].coverPhoto}
            alt={slides[index].title}
            className="w-auto h-auto object-cover  rounded-xl"
          />
          
          <h2 className="text-center text-2xl sm:text-4xl font-extrabold tracking-wide design-font
                   bg-clip-text text-white
                   drop-shadow-lg uppercase">
      {slides[index].title}
    </h2>
          </div>
          
        </motion.div>
      </AnimatePresence>

      
    </div>
  );
};

export default Banner;
