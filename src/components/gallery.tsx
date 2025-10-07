import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <section className='bg-white pt-10 px-5 2xl:px-0'>
            <h2 className='text-[50px] text-center lg:pt-10 pt-5 lg:pb-20 pb-10'>Gallery</h2>
            <div className='flex justify-center items-center flex-wrap lg:flex-nowrap'>
                <Image src="/1.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/2.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/3.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/4.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/5.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
            </div>
            <div className='flex justify-center items-center lg:flex-nowrap flex-wrap'>
                <Image src="/6.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/7.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/8.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/9.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
                <Image src="/10.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[250px] md:w-[204px] w-full" />
            </div>
        </section>
    )
}

export default Gallery