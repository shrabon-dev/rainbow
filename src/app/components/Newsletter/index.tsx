import React from 'react'
import Button from '../utils/Button'
import { MdOutlineNotificationsActive } from "react-icons/md";
import Image from 'next/image';
import lft from '@/app/assets/images/lft.png'
import cntr from '@/app/assets/images/cnt.png'
import rgt from '@/app/assets/images/rgt.png'
export default function Newsletter() {
  return (
    <>
        <div className="newsletter relative bg-gradient-to-r from-g1 to-g2 text-white p-10 rounded-lg shadow-lg">
            <Image className='absolute h-full w-auto left-0 top-0 block' src={lft} alt='shape' />
            <Image className='absolute h-full w-auto -translate-x-1/2 left-1/2 top-0 block' src={cntr} alt='shape' />
            <Image className='absolute h-full w-auto right-0 top-0 block' src={rgt} alt='shape' />
            <div className="flex">
                <div className="w-1/2">
                    <div className="flex items-center gap-5">
                        <span className='border-2 border-white/50 rounded-full p-1'>
                            <span className="icon w-14 h-14 bg-white  rounded-full flex items-center justify-center">
                            <MdOutlineNotificationsActive className='text-4xl text-g2 bg-clip-text bg-gradient-to-l from-g1 to-g2'/>
                                {/* <img src="/images/newsletter.svg" alt="newsletter" className="w-10 h-10 mr-2" /> */}
                            </span>
                        </span>
                        <h5 className='font-semiBold text-3xl text-white leading-7'>keep up to date - <br /> get updates with latest topics</h5>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="form">
                        <form action="get">
                            <div className="grp w-fit bg-white/20 ml-auto rounded-lg border-2 font-extralight border-white/20 p-1 flex items-center gap-3">
                                <input className=' text-base placeholder:!opacity-100 w-80 placeholder:!text-white placeholder:!font-light placeholder:!font-inter text-white p-2 focus:outline-0' type="text" name="" id="" placeholder='Enter your email...'/>
                                <Button text='Subscribe'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>      
        </div>
    </>
  )
}
