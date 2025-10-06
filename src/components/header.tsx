'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white text-black font-inter">
      {/* Desktop Navigation (hidden on mobile) */}
      <nav className="hidden md:flex justify-center items-center gap-10 p-4">
        <Link className="2xl:text-[18px] text-[16px] font-normal font-inter" href="/">
          Home
        </Link>
        <Link className="2xl:text-[18px] text-[16px] font-normal font-inter" href="/services">
          Services
        </Link>
        <Image src="/lotus.png" alt="Logo" width={50} height={50} className="2xl:w-10 w-8" />
        <Link className="2xl:text-[18px] text-[16px] font-normal font-inter" href="/about">
          About Us
        </Link>
        <Link className="2xl:text-[18px] text-[16px] font-normal font-inter" href="/contact">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 relative">
        {/* Logo on the left */}
        <div>
          <Image src="/lotus.png" alt="Logo" width={50} height={50} className="2xl:w-10 w-8" />
        </div>

        {/* Toggle button on the right */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu (full-width under header) */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t py-4 flex flex-col items-center gap-3 z-10">
            <Link
              className="2xl:text-[18px] text-[16px] font-normal font-inter"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="2xl:text-[18px] text-[16px] font-normal font-inter"
              href="/services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              className="2xl:text-[18px] text-[16px] font-normal font-inter"
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="2xl:text-[18px] text-[16px] font-normal font-inter"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header