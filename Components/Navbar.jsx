"use client"
import React from 'react'
import Image from 'next/image'
import ButtonBlue from './ButtonBlue'
import '@/Styles/nav.css'

const Navbar = () => {

  const handleScroll = (e) => {
     
  }
  return (
   <nav className='main_nav'>
        <Image src='/logo.svg' width={120} height={20} alt='geargaze' />
        <ButtonBlue title='Sign In' handleClick={handleScroll} style_btn='button_white' />
   </nav>
  )
}




export default Navbar

