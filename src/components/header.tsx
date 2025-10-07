'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const MotionLink = motion(Link)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const baseLinkClass = "2xl:text-[18px] text-[16px] font-normal font-inter transition-all duration-200 px-2 py-1 rounded"
  const getLinkClass = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
    const activeStyles = "text-[#6B0606] font-medium underline bg-[#FFF5F5]"
    const hoverStyles = "hover:text-[#6B0606] hover:underline hover:bg-[#FFF5F5]"
    const defaultStyles = "text-black"
    return `${baseLinkClass} ${hoverStyles} ${isActive ? activeStyles : defaultStyles}`
  }

  // Keep for mobile
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="bg-white text-black font-inter relative">
      {/* Desktop Navigation — logo centered between links */}
      <nav className="hidden md:flex justify-center items-center gap-10 p-4">
        <MotionLink
          href="/"
          className={getLinkClass('/')}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          Home
        </MotionLink>
        <MotionLink
          href="/services"
          className={getLinkClass('/services')}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          Services
        </MotionLink>

        {/* Centered Logo */}
        <Image src="/lotus.png" alt="Logo" width={50} height={50} className="2xl:w-10 w-8" />

        <MotionLink
          href="/about"
          className={getLinkClass('/about')}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          About Us
        </MotionLink>
        <MotionLink
          href="/contact"
          className={getLinkClass('/contact')}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          Contact Us
        </MotionLink>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div>
          <Image src="/lotus.png" alt="Logo" width={50} height={50} className="2xl:w-10 w-8" />
        </div>

        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <div className="py-4 flex flex-col items-center gap-3">
              {navItems.map((item) => (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  className={getLinkClass(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header