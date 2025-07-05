import React from 'react'
import GradientColor from '../utils/GradientColor'
import Button from '../utils/Button'
import { BiPhoneCall } from "react-icons/bi";
import Icon from '../utils/Icon';
import Image from 'next/image';
import event from "@/app/assets/images/event/evnt.png"
import hro from "@/app/assets/images/hro.png"
import rckt from "@/app/assets/images/Rocket-small.png"
import tr from "@/app/assets/images/tr.png"
import box from "@/app/assets/images/box.png"
import crcl_txt from "@/app/assets/images/crcl_btn.png"
import { CiCirclePlus } from "react-icons/ci";


export default function Hero() {
  return (
    <>
      <section className="hero-section relative py-20 md:pb-10 2xl:pb-50 ">
        <Image className='absolute left-20 top-1/4' src={box} alt='shape'/>
        <div className="container mx-auto ">
          <div className="">
            <div className="w-full">
                     <div className="small-md:flex items-center justify-between">
                          <div className="w-full small-md:w-1/2 2xl:w-2/3 ">
                            <h1 className='font-bold text-2xl sm:text-4xl lg:text-6xl xl:text-[100px] leading-tight'><span className='relative'>We shape  the future <span className='absolute -right-5 -top-5'><Image src={tr} alt='shape'/></span>  </span><span className='relative block xl:inline-block'>of <span className='text-[60px] sm:text-6xl xl:text-[100px] relative inline-block'><GradientColor text='business' fontWeight='semibold'/>  <span className='absolute -right-20 2xl:top-5'><Image src={rckt} alt='shape'/></span></span>  </span></h1>
                            <p className='text-clr-text font-normal text-sm mt-4 lg:max-w-1/2 leading-7'>A business consultant is a professional who provides expert advice and guidance to businesses on various aspects such.</p>
                          </div>
                          {/* <div className="w-1/2 flex justify-end">
                            <img src="/images/hero_image.png" alt="Hero Image" className='w-64 h-auto'/>
                          </div> */}
                        </div>
                        <div className="flex items-center gap-10 mt-10">
                          <Button text='Explore more'/>
                          <span className='flex items-center gap-3'>
                            <Icon clr='g1' size='2xl' icon={<BiPhoneCall/>} />
                            <span className="txt">
                              <p className='font-inter text-sm text-clr-text'>Free Consultant</p>
                              <p className='font-inter font-medium text-base text-dark'>(406) 555-0120</p>
                            </span>
                          </span>
                        </div>
                        {/* Registerd people */}
                        <div className="flex gap-5 mt-10 items-center">
                          <div className='flex items-center -space-x-4'>
                            <div className="ple w-10 h-10 rounded-full bg-g1 overflow-hidden border-2 border-white">
                              <Image src={event} alt='registerd ple' />
                            </div>
                            <div className="ple w-10 h-10 rounded-full bg-g1 overflow-hidden border-2 border-white">
                              <Image src={event} alt='registerd ple' />
                            </div>
                            <div className="ple w-10 h-10 rounded-full bg-g1 overflow-hidden border-2 border-white">
                              <Image src={event} alt='registerd ple' />
                            </div>
                            <div className="ple w-10 h-10 rounded-full bg-g2/50 flex justify-center items-center text-2xl text-white overflow-hidden border-2 border-white relative">
                              <Image src={event} alt='registerd ple' />
                              <div className="overlay bg-g2/50 flex justify-center items-center w-full h-full absolute top-0 left-0">
                              <CiCirclePlus className='' />
                              </div>
                            </div>
                          </div>
                          <span className="txt">
                            <p className='font-inter text-sm text-clr-text'><span className='font-bold text-g1'>2.5K+</span> Business Peoples <br /> Already Registered</p> 
                          </span>
                        </div>
            </div>
            <div className="hidden md:block w-full">
                <div className="hr_img md:absolute -bottom-20 right-0 -z-10 md:w-[60%] xl:w-[70%] 2xl:w-[1120px] h-fit">
                  <div className="text_circle absolute -top-20 left-[55%] -translate-x-1/2 w-fit h-fit">
                      <Image src={crcl_txt} alt='hero image' className='w-44 h-44' />
                  </div>
                  <Image src={hro} alt='hero image' className='w-full h-auto' />
                </div>
            </div>
          </div>
 
        </div>
      </section>
    </>
  )
}
