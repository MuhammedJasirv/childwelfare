import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carouselsOne from '../../assets/images/carousels/carouselsOne.png';
import carouselsTwo from '../../assets/images/carousels/carouselsOne.png';
import carouselsThree from '../../assets/images/carousels/carouselsOne.png';

const images = [carouselsOne, carouselsTwo, carouselsThree];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-looping every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white border-2 border-borderbg rounded-xl p-1 overflow-hidden">
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

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileTap={{ scale: 0.8 }}
            animate={{
              width: currentIndex === index ? 24 : 12,
              backgroundColor: currentIndex === index ? '#7D8611' : '#ccc',
              opacity: currentIndex === index ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="h-3 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
