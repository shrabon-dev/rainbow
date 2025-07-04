"use client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";
import Image from "next/image";
import fdbcImg from "@/app/assets/images/ceo.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import whiteArrow from "@/app/assets/images/white_arrow.png";
import grArrow from "@/app/assets/images/gr_arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
export default function Feedback() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section
        id="feedback_sect"
        className="bg-clr-secondary overflow-hidden relative"
      >
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
              <div className="flex items-center justify-center mb-8 gap-5">
                <div className="img w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    className="w-full h-full block object-cover"
                    src={fdbcImg}
                    alt="fdbck"
                  />
                </div>
                <div className="img w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    className="w-full h-full block object-cover"
                    src={fdbcImg}
                    alt="fdbck"
                  />
                </div>
                <div className="center relative">
                  <span className="p-3 bg-g4 absolute -bottom-2 -left-2 text-white inline-block text-xl rounded-full">
                    <BiSolidQuoteAltLeft />
                  </span>
                  <div className="img w-24 h-24 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      className="w-full h-full block object-cover"
                      src={fdbcImg}
                      alt="fdbck"
                    />
                  </div>
                </div>
                <div className="img w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    className="w-full h-full block object-cover"
                    src={fdbcImg}
                    alt="fdbck"
                  />
                </div>
                <div className="img w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    className="w-full h-full block object-cover"
                    src={fdbcImg}
                    alt="fdbck"
                  />
                </div>
              </div>
            </div>

            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
              speed={1000}
              loop={true}
              modules={[Thumbs, Navigation]}
              navigation={{ nextEl: ".prev", prevEl: ".next" }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="info max-w-[740px] mx-auto text-center">
                  <p className="font-normal text-2xl text-clr-text leading-10">
                    “Simply dummy text of the printing and Expert Advisor. lorem
                    Ipsum has been the standard dummy text ever since the when
                    an unknown printer took a galley of type and scrambled.”
                  </p>
                  <h6 className="font-normal text-lg pt-8 pb-3 text-clr-text  ">
                    <span className="text-clr">Bm Ashik</span> - UI/UX Designer
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
              <SwiperSlide>
                <div className="info max-w-[740px] mx-auto text-center">
                  <p className="font-normal text-2xl text-clr-text leading-10">
                    “Simply dummy text of the printing and Expert Advisor. lorem
                    Ipsum has been the standard dummy text ever since the when
                    an unknown printer took a galley of type and scrambled.”
                  </p>
                  <h6 className="font-normal text-lg pt-8 pb-3 text-clr-text  ">
                    <span className="text-clr">Bm Ashik</span> - UI/UX Designer
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
              <SwiperSlide>
                <div className="info max-w-[740px] mx-auto text-center">
                  <p className="font-normal text-2xl text-clr-text leading-10">
                    “Simply dummy text of the printing and Expert Advisor. lorem
                    Ipsum has been the standard dummy text ever since the when
                    an unknown printer took a galley of type and scrambled.”
                  </p>
                  <h6 className="font-normal text-lg pt-8 pb-3 text-clr-text  ">
                    <span className="text-clr">Bm Ashik</span> - UI/UX Designer
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
              <SwiperSlide>
                <div className="info max-w-[740px] mx-auto text-center">
                  <p className="font-normal text-2xl text-clr-text leading-10">
                    “Simply dummy text of the printing and Expert Advisor. lorem
                    Ipsum has been the standard dummy text ever since the when
                    an unknown printer took a galley of type and scrambled.”
                  </p>
                  <h6 className="font-normal text-lg pt-8 pb-3 text-clr-text  ">
                    <span className="text-clr">Bm Ashik</span> - UI/UX Designer
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
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
