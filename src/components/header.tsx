import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className='flex justify-center items-center gap-10 bg-white text-black p-4 font-inter'>
            <Link className='text-[16px] font-normal font-inter' href="/">Home</Link>
            <Link className='text-[16px] font-normal font-inter' href="/services">Services</Link>
            <Image src="/lotus.png" alt="Logo" width={50} height={50} className='w-10'/>
            <Link className='text-[16px] font-normal font-inter' href="/about">About Us</Link>
            <Link className='text-[16px] font-normal font-inter' href="/contact">Contact Us</Link>
        </nav>
    </header>
  )
}

export default Header