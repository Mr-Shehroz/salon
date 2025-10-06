import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <section className='bg-[#DFBFA8] lg:py-20 py-10 relative text-center'>
            <div className='max-w-[700px] mx-auto px-5'>
                <Image src="/beauty-logo.png" alt="Logo" width={200} height={100} className='mx-auto 2xl:w-[443px] xl:w-[380px] md:w-[300px] w-[280px] h-auto relative z-10' />
                <p className='2xl:text-[16px] text-[14px] text-[#909090]'>Est tortor egestas sed feugiat elementum. Viverra nulla amet a ultrices massa dui. Tortor est purus morbi vitae arcu suspendisse amet.</p>
            </div>
        </section>
    )
}

export default Footer