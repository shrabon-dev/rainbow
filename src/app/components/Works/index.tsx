import Image from 'next/image'
import React from 'react'
import titleIcon from '@/app/assets/images/Icon.png'
import GradientColor from '../utils/GradientColor'
import whiteArrow from "@/app/assets/images/white_arrow.png"
import grArrow from "@/app/assets/images/gr_arrow.png"
import WorkItem from '../utils/WorkItem'
import imgOne from '@/app/assets/images/36.png'
import imgTwo from '@/app/assets/images/business-people.png' 
import imgThree from '@/app/assets/images/image1368.png' 
export default function Works() {
  
  return (
    <>
      <section id='works_showcase' className='py-20 overflow-hidden'>
        <div className="container mx-auto py-20">
          <div className="flex">
            <div className="w-1/2">
              <div className="title flex items-center gap-1">
                <Image src={titleIcon} alt='icon'/>
                <span className='text-base'>
                <GradientColor text='Work showcase'/>
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <p className='font-normal text-base text-clr-text max-w-1/2 ml-auto text-end'>Ready to transform your hard work into a thriving, stress-free business?</p>
              <div className="slide_btn w-24 ml-auto mt-10 relative">
              <button className="absolute   cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1 left-0 -translate-y-1/2 top-1/2 next w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
              <Image className='hidden -rotate-180 group-hover:block' src={whiteArrow} alt='prev btn arrow'/> 
              <Image className='inline-block   group-hover:hidden' src={grArrow} alt='prev btn arrow'/></button>
              <button className="absolute next right-0 z-[11] cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1  -translate-y-1/2 top-1/2 next w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
                <Image className='hidden group-hover:block' src={whiteArrow} alt='next btn arrow'/> 
                <Image className=' rotate-180 group-hover:hidden' src={grArrow} alt='next btn arrow'/> 
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase_container flex justify-center items-end">
          <WorkItem slideClass='first_last' title='Business Consulting Service' date='2024, Business' img={imgOne} link='/'/>
          <WorkItem slideClass='first_active' title='Business Consulting Service' date='2024, Business' img={imgTwo} link='/'/>
          <WorkItem slideClass='second_active' title='Business Consulting Service' date='2024, Business' img={imgThree} link='/'/>
          <WorkItem slideClass='third_active' title='Business Consulting Service' date='2024, Business' img={imgOne} link='/'/>
          <WorkItem slideClass='last_slide' title='Business Consulting Service' date='2024, Business' img={imgOne} link='/'/>
        </div>
      </section>
    </>
  )
}
