import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-white'>
        <Image src="/beauty-logo.png" alt="Banner Image" width={447} height={600} className='2xl:w-[447px] xl:w-[420px] md:w-[350px] w-[250px]'/>
        <Image src="/banner.svg" alt="Banner Image" width={447} height={600} className='w-full'/>
    </section>
  )
}

export default Banner