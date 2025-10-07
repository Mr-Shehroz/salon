'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-white md:pb-12 pb-8'>
      {/* Animated Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4"
      >
        <Image
          src="/about-logo.png"
          alt="Banner Logo"
          width={447}
          height={600}
          className='2xl:w-[316px] xl:w-[280px] md:w-[220px] w-[160px]'
        />
      </motion.div>

      {/* Animated Banner SVG */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="w-full max-w-[447px] md:max-w-full"
      >
        <Image
          src="/about-banner.svg"
          alt="Banner Background"
          width={447}
          height={600}
          className='w-full h-auto'
        />
      </motion.div>
    </section>
  )
}

export default Banner