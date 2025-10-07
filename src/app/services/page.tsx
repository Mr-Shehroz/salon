import React from 'react'
import ServicesBanner from '@/components/services-banner'
import Makeup from '@/components/makeup'
import Nailcare from '@/components/nailcare'
import Hairstyling from '@/components/hairstyling'

const Services = () => {
  return (
    <section className='bg-white'>
        <ServicesBanner />
        <div className='text-center max-w-[900px] mx-auto px-5 py-10'>
            <h2 className='text-[50px]'>Services and prices</h2>
            <p className='font-normal 2xl:text-[18px] lg:text-[16px] text-[14px] text-[#909090] font-inter'> Est tortor egestas sed feugiat elementum. Viverra nulla amet a ultrices massa dui. Tortor est purus morbi vitae arcu suspendisse amet.</p>
        </div>
        <Makeup />
        <Hairstyling />
        <Nailcare />
    </section>
  )
}

export default Services