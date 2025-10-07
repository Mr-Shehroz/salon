'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sales = () => {
  const slides = [
    "Only this month 20% discount on all services",
    "Free consultation for new clients!",
    "Book now and get a free follow-up session",
    "Limited slots available — reserve today!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-[#6B0606] h-[40px] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex items-center justify-center md:gap-4 gap-2 h-full"
          initial={{ x: '100%' }}        // Start from right
          animate={{ x: 0 }}             // Slide in to center
          exit={{ x: '-100%' }}          // Exit to left
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.6,
          }}
        >
          <Image
            src="/Icon.png"
            alt="Sales Icon"
            height={100}
            width={100}
            className="2xl:w-6 xl:w-5 md:w-4 w-3 flex-shrink-0"
          />
          <h4 className="font-medium 2xl:text-[16px] xl:text-[14px] md:text-[12px] text-[10px] text-white uppercase whitespace-nowrap">
            {slides[currentIndex]}
          </h4>
          <Image
            src="/Icon.png"
            alt="Sales Icon"
            height={100}
            width={100}
            className="2xl:w-6 xl:w-5 md:w-4 w-3 flex-shrink-0"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sales;