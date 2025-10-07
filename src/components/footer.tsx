'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <section className='bg-[#DFBFA8] lg:py-20 py-10 relative text-center'>
      <div className='max-w-[700px] mx-auto px-5'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/beauty-logo.png"
            alt="Logo"
            width={200}
            height={100}
            className='mx-auto 2xl:w-[443px] xl:w-[380px] md:w-[300px] w-[280px] h-auto relative z-10'
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='2xl:text-[16px] text-[14px] text-[#909090]'
        >
          Est tortor egestas sed feugiat elementum. Viverra nulla amet a ultrices massa dui. Tortor est purus morbi vitae arcu suspendisse amet.
        </motion.p>
      </div>
    </section>
  )
}

export default Footer