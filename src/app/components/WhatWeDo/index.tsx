'use client';

import { TiArrowLeftOutline } from "react-icons/ti";
import Title from "../utils/Title";
import ServiceItem from "../utils/ServiceItem"; // Your ServiceItem component
import imgOne from "@/app/assets/images/Image.png";
import bg from "@/app/assets/images/bg_el.png";
import Button from "../utils/Button";
import Image from "next/image";
import { useState } from "react";
import whiteArrow from "@/app/assets/images/white_arrow.png";
import grArrow from "@/app/assets/images/gr_arrow.png";

export default function WhatWeDo() {
  // activeSlide will now represent the ID of the centrally active slide.
  const [activeSlideId, setActiveSlideId] = useState(1); // Start with the first service as active

  const serviceData = [
    { id: 1, title: 'One-to-one Consulting', desc: 'Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.', img: imgOne, link: "/" },
    { id: 2, title: 'Business Consulting', desc: 'Expert guidance to help your business thrive. We analyze, strategize, and implement solutions tailored to your unique needs.', img: imgOne, link: "/" },
    { id: 3, title: 'Financial Advisory', desc: 'Comprehensive financial planning and advisory services to secure your financial future and optimize your investments.', img: imgOne, link: "/" },
    { id: 4, title: 'Marketing Solutions', desc: 'Innovative marketing strategies to boost your brand visibility, engage your audience, and drive significant growth.', img: imgOne, link: "/" },
    { id: 5, title: 'Talent Management', desc: 'Optimizing your workforce with effective talent acquisition, development, and retention strategies.', img: imgOne, link: "/" },
    { id: 6, title: 'Digital Transformation', desc: 'Guiding your business through the complexities of digital change to enhance efficiency and competitiveness.', img: imgOne, link: "/" },
  ];

  const handleNext = () => {
    setActiveSlideId((prevId) => {
      const currentIndex = serviceData.findIndex(item => item.id === prevId);
      const nextIndex = (currentIndex + 1) % serviceData.length;
      return serviceData[nextIndex].id;
    });
  };

  const handlePrev = () => {
    setActiveSlideId((prevId) => {
      const currentIndex = serviceData.findIndex(item => item.id === prevId);
      const prevIndex = (currentIndex - 1 + serviceData.length) % serviceData.length;
      return serviceData[prevIndex].id;
    });
  };

  return (
    <>
      <section className="services pb-40 md:pb-0 relative" id="service_sect">
        <Image src={bg} alt="bg shape" className="absolute left-0 top-0"/>
        <div className="container mx-auto py-20">
          <div className="title text-center">
            <Title title="What We Do" icon={<TiArrowLeftOutline/>}/>
            <h2 className=" text-clr text-5xl font-semibold mt-10">Our Popular Services</h2>
          </div>
          <div className="services_box relative z-10 md:mt-20 h-[600px]"> 
            <span className="bg-gradient-to-r from-g2 -z-10 to-g1 block w-52 h-52 blur-3xl absolute right-20 -top-10"></span>
        
            {serviceData.map((item) => (
              <ServiceItem
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                link={item.link}
                id={item.id}
                activeSlide={activeSlideId} 
                onClick={() => setActiveSlideId(item.id)} 
              />
            ))}

            
            {/* Button */} 
            {/* Slider Navigation Buttons */}
            <div className="text-center">
            <div className=" inline-flex items-center pt-[850px] md:pt-[600px] justify-center mx-auto"> 
            <span className="w-40 inline-block">
               <Button text="View all services"/>
            </span>
            <span className="slide_btn w-40 mx-auto z-[999] inline-flex items-center">
              <button onClick={handlePrev} className="rotate-90  next cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1 left-0  w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
                <Image className='hidden -rotate-180 group-hover:block' src={whiteArrow} alt='prev btn arrow'/>
                <Image className='inline-block  group-hover:hidden' src={grArrow} alt='prev btn arrow'/>
              </button>
              <button onClick={handleNext} className=" ml-3 rotate-90 prev right-0 z-[11] cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1    w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
                <Image className='hidden group-hover:block' src={whiteArrow} alt='next btn arrow'/>
                <Image className=' rotate-180 group-hover:hidden' src={grArrow} alt='next btn arrow'/>
              </button>
            </span>

            </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}