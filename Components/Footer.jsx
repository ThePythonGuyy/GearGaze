import { footerLinks } from '@/Constants/details';
import React from 'react'
import '@/Styles/footer.css'
import Image from 'next/image';

const Footer = () => {
  return (
  
    <footer className='footer'>
      <div className='footer_top'>
        <section className='about'>
        <Image src='/logo.svg' width={120} height={20} alt='geargaze' />
        <p><span>GearGaze 2023</span><span> All rights reserved</span></p>
        </section>
        {footerLinks.map((cat) => (
          <div key={cat.title} className='category'>
            <h4>{cat.title}</h4>
            <div>
            {cat.links.map((link) => (
              <span key={link.title}>{link.title}</span>
            ))}
            </div>
          </div>
        ))}
        </div>
        <div className='footer_base'>
              <p>@2023GearGaze. All rights reserved</p>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
        </div>
  </footer>
  )
}



export default Footer
