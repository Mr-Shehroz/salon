import Image from 'next/image'
import React from 'react'

const Care = () => {
    return (
        <section className='md:py-20 py-10 bg-[#F3E2D5]'>
            <div className='flex flex-col md:flex-row md:justify-between justify-center items-center text-center gap-8 md:gap-0 xl:px-20 px-5 max-w-[1600px] mx-auto'>
                <div className='flex flex-col gap-1 items-center max-w-[300px] text-center'>
                    <Image src="/care.svg" alt='care' height={100} width={100} className='2xl:w-[48px] lg:w-[40px] w-[32px] h-auto mb-5' />
                    <h5 className='2xl:text-[28px] lg:text-[24px] text-[20px]'>Professional Care</h5>
                    <p className='2xl:text-[16px] lg:text-[14px] text-[12px] text-[#909090]'>Eleifend arcu non lorem justo in tempus purus gravida. </p>
                </div>
                <div className='flex flex-col gap-1 items-center max-w-[300px] text-center'>
                    <Image src="/brand.svg" alt='care' height={100} width={100} className='2xl:w-[48px] lg:w-[40px] w-[32px] h-auto mb-5' />
                    <h5 className='2xl:text-[28px] lg:text-[24px] text-[20px]'>Premium brands</h5>
                    <p className='2xl:text-[16px] lg:text-[14px] text-[12px] text-[#909090]'>Eleifend arcu non lorem justo in tempus purus gravida. </p>
                </div>
                <div className='flex flex-col gap-1 items-center max-w-[300px] text-center'>
                    <Image src="/cosmetics.svg" alt='care' height={100} width={100} className='2xl:w-[48px] lg:w-[40px] w-[32px]     h-auto mb-5' />
                    <h5 className='2xl:text-[28px] lg:text-[24px] text-[20px]'>Natural cosmetic</h5>
                    <p className='2xl:text-[16px] lg:text-[14px] text-[12px] text-[#909090]'>Eleifend arcu non lorem justo in tempus purus gravida. </p>
                </div>
            </div>
        </section>
    )
}

export default Care