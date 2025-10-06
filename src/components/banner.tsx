import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-white'>
        <Image src="/beauty-logo.png" alt="Banner Image" width={447} height={600} className='w-[447px]'/>
        <Image src="/banner.svg" alt="Banner Image" width={447} height={600} className='w-full'/>
    </section>
  )
}

export default Banner