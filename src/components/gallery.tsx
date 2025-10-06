import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <section className='bg-white lg:pt-20 pt-10'>
            <h2 className='text-[50px] text-center lg:pt-10 pt-5 lg:pb-20 pb-10'>Gallery</h2>
            <div className='flex justify-center items-center flex-wrap xl:flex-nowrap'>
                <Image src="/1.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/2.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/3.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/4.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/5.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
            </div>
            <div className='flex justify-center items-center flex-wrap xl:flex-nowrap'>
                <Image src="/6.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/7.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/8.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/9.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
                <Image src="/10.png" alt="Gallery Image 1" width={378} height={200} className="2xl:w-[378px] xl:w-[240px] w-[204px]" />
            </div>
        </section>
    )
}

export default Gallery