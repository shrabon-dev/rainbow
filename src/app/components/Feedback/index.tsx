"use client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";
import Image from "next/image";
import fdbcImg from "@/app/assets/images/ceo.png";
import fdbcImgTwo from "@/app/assets/images/steptodown 21.png";
import fdbcImgThree from "@/app/assets/images/abtOne.png";
import fdbcImgFour from "@/app/assets/images/fdb3.png";
import fdbcImgFive from "@/app/assets/images/fdb4.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import whiteArrow from "@/app/assets/images/white_arrow.png";
import grArrow from "@/app/assets/images/gr_arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
export default function Feedback() {
    const [thumbs, setThumbs] = useState(null);
    const [centerSlide, setCenterSlide] = useState(null);
  const clientFeedbacks = [
    {
      img:fdbcImg,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:' UI / UX Designer',
      star:4,
    }, 
    {
      img:fdbcImgTwo,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:'UI / UX Designer',
      star:4,
    }, 
    {
      img:fdbcImgThree,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:'- UI / UX Designer',
      star:4,
    }, 
    {
      img:fdbcImgFour,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:'UI / UX Designer',
      star:4,
    }, 
    {
      img:fdbcImgFive,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:' UI / UX Designer',
      star:4,
    }, 
    {
      img:fdbcImgFive,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:' UI / UX Designer',
      star:4,
    }, 
    {
      img:fdbcImgFive,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:' UI / UX Designer',
      star:4,
    }, 
    {
      img:fdbcImgFive,
      desc:'“Simply dummy text of the printing and Expert Advisor. lorem Ipsum has been the standard dummy text ever since the when an unknown printer took a galley of type and scrambled.”',
      name:'Bm Ashik',
      disg:' UI / UX Designer',
      star:4,
    }, 
  ]
  return (
    <>
      <section
        id="feedback_sect"
        className="bg-clr-secondary overflow-hidden relative ">
        <span className="bg-gradient-to-bl w-52 h-52 rounded-full z-10 blur-3xl from-g1 to-g3 absolute top-0 -left-20 block "></span>
        <span className="bg-gradient-to-bl w-52 h-52 rounded-full z-10 blur-3xl from-g1 to-g3 absolute bottom-0 -right-10 block "></span>
        <div className="container mx-auto py-15 relative">
          <div className="feedback_box max-w-[960px] px-24 mx-auto relative">
          <div className="slide_btn">
            <button className="absolute   cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1 left-0 z-50 -translate-y-1/2 top-1/2 prev w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
              <Image
                className="hidden -rotate-180 group-hover:block"
                src={whiteArrow}
                alt="prev btn arrow"
              />
              <Image
                className="inline-block   group-hover:hidden"
                src={grArrow}
                alt="prev btn arrow"
              />
            </button>
            <button className="absolute next right-0 z-[11] cursor-pointer duration-300 ease-linear transition-all hover:from-g2 hover:to-g1  -translate-y-1/2 top-1/2 next w-10 h-10 border-2 border-primary/20  inline-flex items-center justify-center bg-gradient-to-br hover:border-white from-g2/0 to-g1/0 rounded-full group">
              <Image
                className="hidden group-hover:block"
                src={whiteArrow}
                alt="next btn arrow"
              />
              <Image
                className=" rotate-180 group-hover:hidden"
                src={grArrow}
                alt="next btn arrow"
              />
            </button>
          </div>
          <div className="client_img">
            <div className="  mb-5">
              <Swiper   
                onSwiper={setThumbs} // ← this sets the thumbs swiper instance
                slidesPerView={5}
                spaceBetween={10}
                centeredSlides={true}
                onSlideChange={(swiper) => setCenterSlide(swiper.realIndex)}
                loop
                modules={[Navigation, Thumbs]}
                navigation={{ nextEl: ".next", prevEl: ".prev" }}
                speed={600}
                watchSlidesProgress 
                className="mb-5" >
                  {clientFeedbacks.map((item,index) => 

                  centerSlide == index ?
                      <SwiperSlide   className="flex items-center justify-center" key={index} >
                        <div key={index}  className="center clientImg relative -left-4  -top-1/2">
                          <span className="p-1 md:p-3 qoute bg-g4   absolute bottom-0 left-0 text-white text-sm md:text-xl rounded-full">
                            <BiSolidQuoteAltLeft />
                          </span>
                          <div className="img w-16 md:w-24 h-16 md:h-24 rounded-full overflow-hidden border-2 border-white">
                            <Image
                              className="w-full h-full object-top block object-cover"
                              src={item.img}
                              alt="fdbck"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                  :
       
                      <SwiperSlide  className="flex items-center justify-center"  key={index} >
                 
                          <div  key={index}  className="img w-6 md:w-10 h-6 md:h-10 rounded-full overflow-hidden border-2  border-white">
                            <Image
                              className="w-full h-full object-top block object-cover"
                              src={item.img}
                              alt="fdbck"
                            />
                          </div>
                      </SwiperSlide>
                  )}
            
              </Swiper>
    
            </div>
          </div>
          <Swiper 
          modules={[Navigation, Thumbs]}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          thumbs={{ swiper: thumbs }} // ← connect this to the top swiper
          slidesPerView={1}
          loop
          className="mb-6 select-none"
          >
            {clientFeedbacks.map((item,index)=>
            <SwiperSlide key={index}>
              <div className="info max-w-[740px] mx-auto text-center">
                <p className="font-normal text-sm md:text-2xl text-clr-text md:leading-10">
                  {item.desc}
                </p>
                <h6 className="font-normal text-base md:text-lg pt-8 pb-3 text-clr-text  ">
                  <span className="text-clr">{item.name}</span> - {item.disg}
                </h6>
                <div className="star flex justify-center items-center text-amber-300">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoMdStarHalf />
                </div>
              </div>
            </SwiperSlide>
            )}
      
          </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
