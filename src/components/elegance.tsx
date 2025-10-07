'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Elegance = () => {
  const cardImages = [
    "/Card.svg",
    "/Card 1.svg",
    "/Card 2.svg",
    "/Card 3.svg"
  ]

  return (
    <section className='bg-white md:py-20 py-10 px-5'>
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className='text-center max-w-[900px] mx-auto px-5'
      >
        <h2 className='text-[50px] lg:mb-8 mb-4 leading-tight'>
          Elegance comes from being as beautiful inside as outside
        </h2>
        <p className='font-normal 2xl:text-[18px] lg:text-[16px] text-[14px] text-[#909090] font-inter'>
          Eleifend arcu non lorem justo in tempus purus gravida. Est tortor egestas sed feugiat elementum. Viverra nulla amet a ultrices massa dui. Tortor est purus morbi vitae arcu suspendisse amet.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className='flex justify-center items-center gap-5 mt-16 flex-wrap'
      >
        {cardImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='cursor-pointer'
          >
            <Image
              src={src}
              alt={`Elegance Card ${index + 1}`}
              width={350}
              height={600}
              className='
                2xl:w-[350px] lg:w-[300px] md:w-[300px] w-full max-w-[350px]
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-xl
                hover:shadow-black/10
                hover:-translate-y-2
                rounded-lg
              '
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Elegance