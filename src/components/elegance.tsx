import Image from 'next/image'
import React from 'react'

const Elegance = () => {
  return (
    <section className='bg-white py-20'>
        <div className='text-center max-w-[900px] mx-auto px-5'>
            <h2 className='text-[50px] lg:mb-8 mb-4'>Elegance comes from being as beautiful inside as outside</h2>
            <p className='font-normal 2xl:text-[18px] lg:text-[16px] text-[14px] text-[#909090] font-inter'>Eleifend arcu non lorem justo in tempus purus gravida. Est tortor egestas sed feugiat elementum. Viverra nulla amet a ultrices massa dui. Tortor est purus morbi vitae arcu suspendisse amet.</p>
        </div>
        <div className='flex justify-center items-center gap-5 mt-16 flex-wrap'>
            <Image src="/Card.svg" alt="Elegance Image" width={350} height={600} className='2xl:w-[350px] lg:w-[300px] w-[250px]'/>
            <Image src="/Card 1.svg" alt="Elegance Image" width={350} height={600} className='2xl:w-[350px] lg:w-[300px] w-[250px]'/>
            <Image src="/Card 2.svg" alt="Elegance Image" width={350} height={600} className='2xl:w-[350px] lg:w-[300px] w-[250px]'/>
            <Image src="/Card 3.svg" alt="Elegance Image" width={350} height={600} className='2xl:w-[350px] lg:w-[300px] w-[250px]'/>
        </div>
    </section>
  )
}

export default Elegance