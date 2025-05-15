// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import carouselsOne from '../../assets/images/carousels/carouselsOne.png';
// import carouselsTwo from '../../assets/images/carousels/carouselsOne.png';
// import carouselsThree from '../../assets/images/carousels/carouselsOne.png';

// const images = [carouselsOne, carouselsTwo, carouselsThree];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-looping every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="bg-white border-2 border-borderbg rounded-xl p-1 overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`carousel-${currentIndex}`}
//             className="rounded-xl w-full h-auto object-cover"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center gap-2 mt-4 flex-wrap">
//         {images.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             whileTap={{ scale: 0.8 }}
//             animate={{
//               width: currentIndex === index ? 24 : 12,
//               backgroundColor: currentIndex === index ? '#7D8611' : '#ccc',
//               opacity: currentIndex === index ? 1 : 0.5,
//             }}
//             transition={{ duration: 0.3 }}
//             className="h-3 rounded-full"
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Carousel;
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import part1 from "../../assets/images/carousels/part1.png"; // Lady
import part2 from "../../assets/images/carousels/part2.png"; // Route
import carouselsOne from "../../assets/images/carousels/carouselsOne.png"; // Destination BG
import carouselsTwo from "../../assets/images/carousels/carouselsOne2.png"; // Destination BG
import carouselsThree from "../../assets/images/carousels/carouselsOne3.png"; // Destination BG

const images = [carouselsOne, carouselsTwo, carouselsThree];
const CarouselEffect = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-looping every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl bg-white border border-borderbg   p-1 ">
      {/* Part 3 - Destination as Background */}
      <div className="bg-white   rounded-xl p-1 overflow-hidden">
          <AnimatePresence mode="wait">
           <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`carousel-${currentIndex}`}
            className="rounded-xl w-full h-auto object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay Container */}
      <div className="absolute inset-0">
        {/* Part 1 - Lady */}
        {/* <motion.img
          src={part1}
          alt="Lady"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="absolute top-2 left-1 h-full object-contain z-20"
        /> */}

        {/* Part 2 - Route */}
        {/* <motion.img
          src={part2}
          alt="Route"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-1 left-5  h-full object-contain z-30"
        /> */}

        {/* Text Content */}
               {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute top-[2%] left-0 w-full px-2 sm:px-4 md:px-8 text-white z-40"
        >
          <p className="text-[7px] xs:text-[10px] sm:text-xs md:text-sm lg:text-[10px] xl:text-[13px] mt-2 md:mt-4 lg:text-base font-semibold leading-tight sm:leading-snug md:leading-normal text-center">
            നിങ്ങളുടെ ചെറിയ സഹായം ഒരു കുഞ്ഞിൻ്റെ വലിയ സ്വപ്‌പ്നത്തിന് തുടക്കം കുറിക്കുന്നു നിങ്ങളുടെ ഓരോ ഓർഡറും അവരുടെ നല്ലൊരു ഭാവിക്കായുള്ള സംഭാവനയാണ്.
          </p>
        </motion.div> */}
        
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute top-[16%] sm:top-[17%] left-[5%] w-[90%] text-center text-black z-40"
        >
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-[12px]  lg:text-[16px] xl:text-[20px] font-bold ">
            We guarantee that each order you place here for Kerala State <br className="hidden xs:inline-block" /> Council for Child Welfare will be delivered there every month on time!
          </p>
        </motion.div> */}
      </div>  
      {/* dfasklj */}
    </div>
  );
};

export default CarouselEffect;
