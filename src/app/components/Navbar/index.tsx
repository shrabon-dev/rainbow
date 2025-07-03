import React from 'react'
import logo from '@/app/assets/images/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { TfiAngleDown } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { SlMenu } from "react-icons/sl";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import Button from '../utils/Button';


export default function Navbar() {
  return (
    <>
        <nav className=''>
            <div className="container bg-transparent border-b-2 border-primary/20 pb-5 mx-auto">
            <div className="flex justify-between items-center">
                <div className="w-1/3 flex items-center gap-2">
                    <div className="info text-clr-text flex items-center gap-1">
                        <button className="icon text-lg px-2 "><SlMenu/></button>
                        <button className="icon text-lg px-2 border-l-2 border-clr-brdr/16"><MdOutlineLocalGroceryStore/></button>
                        <button className="icon text-lg px-2 border-l-2 border-clr-brdr/16"><BiSearchAlt/></button>
                    </div>
                 
                </div>
                <div className="w-1/3">
                    <div className="menus">
                        <ul className='flex items-center justify-center gap-8'>
                            <li><Link className='text-clr-text font-medium font-inter text-base' href={'/'}>Home</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-base' href={'/'}>About</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-base' href={'/'}>Services</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-base' href={'/'}>Pages</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-base' href={'/'}>News</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-base' href={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="text-end">
                        <Button text='Get a free quote'/>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}
