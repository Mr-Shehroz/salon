'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  // All image sources in order
  const images = [
    "/1.png", "/2.png", "/3.png", "/4.png", "/5.png",
    "/6.png", "/7.png", "/8.png", "/9.png", "/10.png"
  ];

  // Split into two rows (5 per row)
  const row1 = images.slice(0, 5);
  const row2 = images.slice(5);

  return (
    <section className='bg-white pt-10 px-5 2xl:px-0'>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className='text-[50px] text-center lg:pt-10 pt-5 lg:pb-20 pb-10'
      >
        Gallery
      </motion.h2>

      {/* Row 1 */}
      <div className='flex justify-center items-center flex-wrap lg:flex-nowrap gap-2 lg:gap-0'>
        {row1.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className='overflow-hidden rounded-lg'
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={378}
              height={200}
              className='
                2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full
                transition-all duration-300
                hover:scale-105
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-black/15
                object-cover
              '
            />
          </motion.div>
        ))}
      </div>

      {/* Row 2 */}
      <div className='flex justify-center items-center lg:flex-nowrap flex-wrap gap-2 lg:gap-0 mt-2'>
        {row2.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: (index + 5) * 0.08 }}
            className='overflow-hidden rounded-lg'
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 6}`}
              width={378}
              height={200}
              className='
                2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full
                transition-all duration-300
                hover:scale-105
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-black/15
                object-cover
              '
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery