import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Treatment = () => {
    return (
        <section className='xl:pt-20 pt-5 bg-white'>
            <div className='flex flex-col md:flex-row justify-between items-center xl:px-20 px-5 xl:max-w-[1400px] max-w-[900px] mx-auto'>
                <div>
                    <Image src="/1.svg" alt='nail' height={100} width={100} className='2xl:w-[550px] xl:w-[480px] lg:w-[350px] md:w-[300px] w-full h-auto' />
                </div>
                <div className='flex flex-col justify-center items-center text-center xl:gap-4 gap-2 my-5 md:my-0'>
                    <h2 className='text-[50px]'>Treatments and prices</h2>
                    <p className='text-[#909090] 2xl:text-[16px] text-[14px]'>Velit in dui dictum arcu felis tempor in feugiat in mauris...</p>
                    <div className='flex gap-4 items-center'>
                        <h6 className='2xl:text-[16px] text-[14px] font-medium text-black'>Nail care</h6>
                        <div className='2xl:w-[296px] md:w-[226px] w-[190px] border-dashed border border-[#909090]' />
                        <h6 className='2xl:text-[16px] text-[14px] text-[#6B0606]'>$25</h6>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <h6 className='2xl:text-[16px] text-[14px] font-medium text-black'>Hair Styling</h6>
                        <div className='2xl:w-[273px] md:w-[203px] w-[167px] border-dashed border border-[#909090]' />
                        <h6 className='2xl:text-[16px] text-[14px] text-[#6B0606]'>$30</h6>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <h6 className='2xl:text-[16px] text-[14px] font-medium text-black'>Make up</h6>
                        <div className='2xl:w-[297px] md:w-[227px] w-[191px] border-dashed border border-[#909090]' />
                        <h6 className='2xl:text-[16px] text-[14px] text-[#6B0606]'>$50</h6>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <h6 className='2xl:text-[16px] text-[14px] font-medium text-black'>Cosmetology</h6>
                        <div className='2xl:w-[260px] md:w-[190px] w-[154px] border-dashed border border-[#909090]' />
                        <h6 className='2xl:text-[16px] text-[14px] text-[#6B0606]'>$20</h6>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <h6 className='2xl:text-[16px] text-[14px] font-medium text-black'>SPA procedures</h6>
                        <div className='2xl:w-[240px] md:w-[170px] w-[144px] border-dashed border border-[#909090]' />
                        <h6 className='2xl:text-[16px] text-[14px] text-[#6B0606]'>$30</h6>
                    </div>
                    <Link href="#" className='text-[#6B0606] mt-4 underline 2xl:text-[16px] text-[14px] font-medium'>View all</Link>
                </div>
            </div>
        </section>
    )
}

export default Treatment