import React from 'react'
import footer_avatar from '@/app/assets/images/footer_avartar.png'
import flogo from '@/app/assets/images/flogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
export default function Footer() {
  return (
    <footer className='overflow-hidden relative'>
      <div className="avt absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/2">
        <Image src={footer_avatar} alt="avatar" className='w-32 blur-sm'/>
      </div>
      <div className="avt absolute bottom-0 right-0 z-10  -translate-x-1/2">
        <Image src={footer_avatar} alt="avatar" className='w-32 blur-sm'/>
      </div>
      <div className="bg-dark py-20 relative z-0">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-1/3 p-5">     
            <div className="compny bg-card p-10 rounded-lg shadow-lg">
              <div className="logo">
                <Image src={flogo} alt='footer logo'/>
              </div>
              <p className='font-normal text-sm text-white leading-7 py-5'>Introducing our team of talented and skilled professionals who are ready to increase your productivity and bring your business.</p>
              <div className="time">
                <p className='font-normal text-base text-white/80 leading-7'>We Are Available !!</p>
                <h6 className='font-medium text-lg text-white'>Mon-Sat:  10:00am - 08:00pm</h6>
              </div>
              <div className="s_link pt-6 flex gap-5">
                <span><Link className='text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center' href="/"> <FaFacebook/></Link></span>
                <span><Link className='text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center' href="/"> <FaLinkedinIn/></Link></span>
                <span><Link className='text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center' href="/"> <FaXTwitter/></Link></span>
                <span><Link className='text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center' href="/"> <FaInstagram/></Link></span>
              </div>
            </div>
          </div>
          <div className="w-2/3 p-5">
              <div className="fmenus bg-card p-10 rounded-lg shadow-lg">
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="w-1/3">
                      <h4 className='font-semibold text-2xl text-white'>Quick Links</h4>
                      <ul className='space-y-3 pt-8'>
                        <li><Link className='font-normal text-base text-white/90' href="/">About Company</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Strategy</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Investor Presentation</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Investor Career</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Meet Our Team </Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Get in Touch</Link></li>
                      </ul>
                    </div>
                    <div className="w-1/3">
                      <h4 className='font-semibold text-2xl text-white'>Our Services</h4>
                      <ul className='space-y-3 pt-8'>
                        <li><Link className='font-normal text-base text-white/90' href="/">Business Consulting</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Finance Strategy</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Investor Presentation</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Investor Career</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Marketing Analysis</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Tax Preparation</Link></li>






                        
                      </ul>
                    </div>
                    <div className="w-1/3">
                      <h4 className='font-semibold text-2xl text-white'>Upcoming Event</h4>
                      <ul className='space-y-3 pt-8'>
                        <li><Link className='font-normal text-base text-white/90' href="/">About Company</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Strategy</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Investor Presentation</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Investor Career</Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Meet Our Team </Link></li>
                        <li><Link className='font-normal text-base text-white/90' href="/">Get in Touch</Link></li>
                      </ul>
                    </div> 
                  </div>
              </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
      </div>
    </footer>
  )
}
