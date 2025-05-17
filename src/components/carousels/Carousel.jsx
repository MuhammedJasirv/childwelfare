import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../assets/images/carousels/carouselsOne1.png";
import bg2 from "../../assets/images/carousels/carouselsOne2.png";
import bg3 from "../../assets/images/carousels/carouselsOne3.png";

import part1 from "../../assets/images/carousels/part1.png";
import part2 from "../../assets/images/carousels/part2.png";

const images = [
  {
    bg: bg1,
    partOne: part1,
    partTwo: part2,
    text1:
      "നിങ്ങളുടെ ചെറിയ സഹായം ഒരു കുഞ്ഞിൻ്റെ വലിയ സ്വപ്‌പ്നത്തിന് തുടക്കം കുറിക്കുന്നു നിങ്ങളുടെ ഓരോ ഓർഡറും അവരുടെ നല്ലൊരു ഭാവിക്കായുള്ള സംഭാവനയാണ്.",
    text2:
      "We guarantee that each order you place here for kerala state Council for Child Welfare will be delivered there every month on time!",
  },
  {
    bg: bg2,
    partOne: part1,
    partTwo: part2,
    text1:
      "നിങ്ങളുടെ ചെറിയ സഹായം ഒരു കുഞ്ഞിൻ്റെ വലിയ സ്വപ്‌പ്നത്തിന് തുടക്കം കുറിക്കുന്നു നിങ്ങളുടെ ഓരോ ഓർഡറും അവരുടെ നല്ലൊരു ഭാവിക്കായുള്ള സംഭാവനയാണ്.",
    text2:
      "We guarantee that each order you place here for kerala state Council for Child Welfare will be delivered there every month on time!",
  },
  {
    bg: bg3,
    partOne: part1,
    partTwo: part2,
    text1:
      "നിങ്ങളുടെ ചെറിയ സഹായം ഒരു കുഞ്ഞിൻ്റെ വലിയ സ്വപ്‌പ്നത്തിന് തുടക്കം കുറിക്കുന്നു നിങ്ങളുടെ ഓരോ ഓർഡറും അവരുടെ നല്ലൊരു ഭാവിക്കായുള്ള സംഭാവനയാണ്.",
    text2:
      "We guarantee that each order you place here for kerala state Council for Child Welfare will be delivered there every month on time!",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = images[currentIndex];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl bg-white border-2 border-borderbg p-1 h-full"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Image */}
            <img
              src={current.bg}
              alt="background"
              className="w-full h-auto object-cover rounded-xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0">
              {/* Part One (e.g. Lady) */}
              <motion.img
                src={current.partOne}
                alt="part1"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 h-full object-contain z-20"
              />

              {/* Part Two (e.g. Route) */}
              <motion.img
                src={current.partTwo}
                alt="part2"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 h-full object-contain z-30"
              />

              {/* Text Overlay */}
              {/* Text 1 */}
              {/* Malayalam Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute  md:top-0 left-1/2 transform -translate-x-1/2 w-full text-center z-40 py-0  xl:py-3 xl:mt-0 nv:mt-2 lg:mt-2 md:mt-2 sm:mt-2 mt-1"
              >
                <p className="text-white text-[5px] xl:text-[12px] 2xl:text-[14px] nv:text-[10px] lg:text-[9.3px] md:text-[13px] sm:text-[10px] mobile:text-[6px] font-semibold leading-relaxed font-sans">
                  {current.text1}
                </p>
              </motion.div>

              {/* English Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-[18%] md:top-[16%] left-1/2 transform -translate-x-1/2 w-full text-center z-40 px-4 "
              >
                <p className="text-[7px] xl:text-[15px] 2xl:text-[20px] nv:text-[13px] lg:text-[11.3px] md:text-[18px] sm:text-[15px] mobile:text-[9px] font-bold font-sans">
                  {current.text2}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
      </motion.div>
      <div className="flex justify-center gap-2 mt-2 pb-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileTap={{ scale: 0.9 }}
            animate={{
              width: currentIndex === index ? 24 : 12,
              backgroundColor: currentIndex === index ? "#7D8611" : "#ccc",
              opacity: currentIndex === index ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="h-3 rounded-full"
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
