'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import titleIcon from '@/app/assets/images/Icon.png'
import GradientColor from '../utils/GradientColor'
import whiteArrow from "@/app/assets/images/white_arrow.png"
import grArrow from "@/app/assets/images/gr_arrow.png"
import WorkItem from '../utils/WorkItem'
import imgOne from '@/app/assets/images/36.png'
import imgTwo from '@/app/assets/images/business-people.png' 
import imgThree from '@/app/assets/images/image1368.png' 

export default function Works() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5; // how many items to show

  const showcaseData = [
    { id: 1, title: 'Business Consulting Service', date: '2024, Business', img: imgOne },
    { id: 2, title: 'Marketing Strategy', date: '2024, Business', img: imgTwo },
    { id: 3, title: 'Financial Planning', date: '2024, Business', img: imgThree },
    { id: 4, title: 'Product Development', date: '2024, Business', img: imgOne },
    { id: 5, title: 'Customer Engagement', date: '2024, Business', img: imgTwo },
    { id: 6, title: 'Future Proofing', date: '2024, Business', img: imgThree },
  ];

  const slideClasses = ['first_active', 'second_active', 'third_active', 'fourth_active', 'last_active'];

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % showcaseData.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + showcaseData.length) % showcaseData.length);
  };

  // Compute visible slides with correct classes
  const visibleSlides = Array.from({ length: visibleCount }, (_, i) => {
    const dataIndex = (startIndex + i) % showcaseData.length;
    return {
      ...showcaseData[dataIndex],
      slideClass: slideClasses[i],
    };
  });

  return (
    <>
      <section id='works_showcase' className='py-20 works_showcase overflow-hidden'>
        <div className="container mx-auto py-20">
          <div className="flex">
            <div className="w-1/2">
              <div className="title flex items-center gap-1">
                <Image src={titleIcon} alt='icon'/>
                <span className='text-sm md:text-base'>
                <GradientColor text='Work showcase'/>
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <p className='font-normal text-sm md:text-base text-clr-text w-full md:max-w-1/2 ml-auto text-end'>Ready to transform your hard work into a thriving, stress-free business?</p>
              <div className="slide_btn w-24 ml-auto mt-10 relative">
              <button onClick={handlePrev} className="absolute next cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1 left-0 -translate-y-1/2 top-1/2  w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
              <Image className='hidden -rotate-180 group-hover:block' src={whiteArrow} alt='prev btn arrow'/> 
              <Image className='inline-block   group-hover:hidden' src={grArrow} alt='prev btn arrow'/></button>
              <button onClick={handleNext} className="absolute prev right-0 z-[11] cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1  -translate-y-1/2 top-1/2  w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
                <Image className='hidden group-hover:block' src={whiteArrow} alt='next btn arrow'/> 
                <Image className=' rotate-180 group-hover:hidden' src={grArrow} alt='next btn arrow'/> 
              </button>
              </div>
            </div>
          </div>
        </div>
       
        <div className="showcase_container flex justify-center items-end">
        {visibleSlides.map((item) => (
            <WorkItem
              key={item.id}
              slideClass={item.slideClass}
              title={item.title}
              date={item.date}
              img={item.img}
              link="/"
            />
          ))}
      
        </div>
      </section>
    </>
  )
}
