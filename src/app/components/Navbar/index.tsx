'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SlMenu } from "react-icons/sl";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import Button from '../utils/Button';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import logo from '@/app/assets/images/logo.webp'

export default function Navbar() {
    const [isHover,setIsHover] = useState(false)
    const [isFixed,setIsFixed] = useState(false)
    const handleMobileMenus = () =>{
        setIsHover(!isHover)
    }
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 200){
                setIsFixed(true)
            }else{
                setIsFixed(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return (
    <>
        <nav className={`${isFixed && 'fixed w-full top-0 pt-3 md:pt-5 bg-clr-secondary z-[99999]'} px-3 sm:px-0 `}>
            <div className="container bg-transparent border-b-2 border-primary/20 pb-3 xl:pb-5 mx-auto ">
            <div className="flex justify-between items-center">
                <div className="w-1/2 sm:w-1/3 flex items-center gap-2">
                    <div className="info text-clr-text flex items-center gap-1">
                        <button onClick={handleMobileMenus} className="icon md:text-xs xl:text-lg px-2 cursor-pointer"><SlMenu/></button>
                        <button className="icon md:text-xs xl:text-lg px-2 border-l-2 border-clr-brdr/16 cursor-pointer relative"><MdOutlineLocalGroceryStore/> <span className='absolute -top-1 -right-1 w-4 h-4 items-center justify-center bg-g4 text-white text-[8px] inline-flex rounded-full'>20</span></button>
                        <button className="icon md:text-xs xl:text-lg px-2 border-l-2 border-clr-brdr/16 cursor-pointer"><BiSearchAlt/></button>
                    </div>
                 
                </div>
                <div className="hidden md:block w-1/3">
                    <div className="menus">
                        <ul className='flex items-center justify-center gap-8'>
                            <li><Link className='text-clr-text font-medium font-inter text-xs xl:text-base' href={'/'}>Home</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-xs xl:text-base' href={'/'}>About</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-xs xl:text-base' href={'/'}>Services</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-xs xl:text-base' href={'/'}>Pages</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-xs xl:text-base' href={'/'}>News</Link></li>
                            <li><Link className='text-clr-text font-medium font-inter text-xs xl:text-base' href={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 sm:w-1/3">
                    <div className="text-end">
                        <Button text='Get a free quote'/>
                    </div>
                </div>
            </div>
            {/* Left Sidebar Menus */}
            <div className={`left_sidebar   p-10 pr-5 h-screen w-full md:w-1/3 lg:w-1/6 border-r-2 border-primary/20 bg-clr-secondary z-[99] fixed top-0 ${isHover ? 'opacity-100 -left-0 duration-300 ease-linear transition-all':' -left-full duration-300 ease-linear transition-all opacity-0'}`}>
                <div className="menus relative">
                    <div className="close_btn absolute right-0 top-0">
                        <button onClick={handleMobileMenus} className='bg-g3/20 hover:bg-g3/30 duration-300 ease-linear transition-all p-2 border-2 border-g4/20 hover:border-g4/40 cursor-pointer rounded-lg'><IoMdClose/></button>
                    </div>
                    <span className="bg-gradient-to-bl w-32 h-32 rounded-full  z-10 blur-3xl from-g1 to-g3  absolute bottom-0 -right-10 block "></span>
                    <div className="logo  mx-auto text-center pb-10 pt-1 ">
                        <Image className='w-32 sm:w-40 md:w-40 ' src={logo} alt='logo'/>
                    </div>
                    <ul className='flex flex-col  items-start justify-center gap-8'>
                        <li><Link className='text-clr hover:border-g3 border-b-2 border-transparent duration-300 ease-linear transition-all font-medium font-inter text-base text-left' href={'/'}>Home</Link></li>
                        <li><Link className='text-clr hover:border-g3 border-b-2 border-transparent duration-300 ease-linear transition-all font-medium font-inter text-base text-left' href={'/'}>About</Link></li>
                        <li><Link className='text-clr hover:border-g3 border-b-2 border-transparent duration-300 ease-linear transition-all font-medium font-inter text-base text-left' href={'/'}>Services</Link></li>
                        <li><Link className='text-clr hover:border-g3 border-b-2 border-transparent duration-300 ease-linear transition-all font-medium font-inter text-base text-left' href={'/'}>Pages</Link></li>
                        <li><Link className='text-clr hover:border-g3 border-b-2 border-transparent duration-300 ease-linear transition-all font-medium font-inter text-base text-left' href={'/'}>News</Link></li>
                        <li><Link className='text-clr hover:border-g3 border-b-2 border-transparent duration-300 ease-linear transition-all font-medium font-inter text-base text-left' href={'/'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}
