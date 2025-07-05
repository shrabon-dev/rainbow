import React from 'react'
import logo from '@/app/assets/images/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { TfiAngleDown } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";


export default function Header() {
  return (
    <>
        <header className='px-3 sm:px-0 py-3 xl:py-5'>
            <div className="container bg-gradient-to-b from-blur via-white to-blur py-3 px-1 small-md:p-3 xl:p-5 rounded-lg mx-auto">
            <div className="flex justify-between items-center">
                <div className="w-1/3 hidden md:flex items-center gap-2">
                    <div className="info md:text-[10px] lg:text-xs xl:text-sm text-clr-text flex items-center gap-1">
                        <span className="icon md:text-[10px] lg:text-sm xl:text-lg"><IoLocationOutline/></span>
                        <Link href="#">15th Street, USA</Link>
                    </div>
                    <div className="border-l-2 md:text-[10px] lg:text-xs xl:text-sm border-clr-brdr/16 pl-2 info text-clr-text flex items-center gap-1">
                        <span className="icon  md:text-[10px] lg:text-sm xl:text-lg"><LuMessageSquareText/></span>
                        <Link href="#">support@gamil.com</Link>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="logo  mx-auto text-center">
                        <Image className='w-42 xl:w-52 mx-auto' src={logo} alt='logo'/>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="socialIcon text-[10px] lg:text-xs xl:text-sm flex items-center justify-end gap-4">
                        <button className='flex items-center gap-2 pr-4 cursor-pointer text-clr-text border-r-2 border-clr-brdr/16'><TfiWorld/> English <TfiAngleDown/></button>
                        <Link className='text-clr-text' href="/"> <FaFacebook/></Link>
                        <Link className='text-clr-text' href="/"> <FaLinkedinIn/></Link>
                        <Link className='text-clr-text' href="/"> <FaXTwitter/></Link>
                        <Link className='text-clr-text' href="/"> <FaInstagram/></Link>
                    </div>
                </div>
            </div>
            </div>
        </header>
    </>
  )
}
