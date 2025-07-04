import Image from 'next/image'
import React from 'react'
import un from '@/app/assets/images/un.png'
import star from '@/app/assets/images/star.png'
export default function Marquee() {
  return (
    <>
    <div className="mb-20 relative">
        <div className="marquee z-10 bg-gradient-to-r from-g1 to-g2 text-white p-5  shadow-lg">
            <div className="marquee-content text-6xl font-bold uppercase stroke_text inline-flex items-center justify-center gap-4">
            <Image src={un} alt='un' className='w-10 inline-block'/>
            <span>Creative    </span>
            <Image src={un} alt='un' className='w-10 inline-block'/>
            <span>Solutions</span>
            <Image src={star} alt='star' className='w-10 inline-block'/>
            <span>Expert Guidance</span>
            <Image src={star} alt='star' className='w-10 inline-block'/>
            <span>Don't miss our special offers! </span>
            <Image src={un} alt='un'/>
            <span>Consulting</span>
            <Image src={star} alt='star' className='w-10 inline-block'/>
            <span> to our website!</span>
            <Image src={star} alt='star' className='w-10 inline-block'/>
            </div>
        </div>
        <div className="border-b-1 relative -top-1 -z-10 rotate-[1deg] border-dashed border-g3"></div>
        <div className="border-b-1 relative -top-1 -z-10 -rotate-[1deg] border-dashed border-g1"></div>
   
    </div>
   
    </>
  )
}
