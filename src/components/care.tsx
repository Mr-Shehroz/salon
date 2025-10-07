'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Care = () => {
  const careItems = [
    {
      icon: "/care.svg",
      title: "Professional Care",
      description: "Eleifend arcu non lorem justo in tempus purus gravida.",
    },
    {
      icon: "/brand.svg",
      title: "Premium brands",
      description: "Eleifend arcu non lorem justo in tempus purus gravida.",
    },
    {
      icon: "/cosmetics.svg",
      title: "Natural cosmetic",
      description: "Eleifend arcu non lorem justo in tempus purus gravida.",
    },
  ]

  return (
    <section className='md:py-20 py-10 bg-[#F3E2D5]'>
      <div className='flex flex-col md:flex-row md:justify-between justify-center items-center text-center gap-8 md:gap-0 xl:px-20 px-5 max-w-[1600px] mx-auto'>
        {careItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className='flex flex-col gap-1 items-center max-w-[300px] text-center'
          >
            <Image
              src={item.icon}
              alt={item.title}
              height={100}
              width={100}
              className='2xl:w-[48px] lg:w-[40px] w-[32px] h-auto mb-5'
            />
            <h5 className='2xl:text-[28px] lg:text-[24px] text-[20px] font-medium'>
              {item.title}
            </h5>
            <p className='2xl:text-[16px] lg:text-[14px] text-[12px] text-[#909090]'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Care