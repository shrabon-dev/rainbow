'use client'
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import GradientColor from "./GradientColor";

export default function ServiceItem({title,desc,link,img,id,}:{title?:string,desc?:string,link?:string,img?:StaticImageData,id?:number,}) {
    const [currentSlide,setCurrentSlide] = useState(1);
    useEffect(()=>{
        setCurrentSlide(currentSlide)
    },[])
  return (
    <div className={`w-[300px] sm:w-[560px] md:w-[760px] lg:w-[960px] mx-auto shadow-2xl rounded-xl bg-white p-10 ${currentSlide == id ? 'relative z-50':`absolute left-1/2 -translate-x-1/2`} ${id == 1 && 'top-[150px] z-50'} ${id == 2 && 'top-[70px] scale-90 z-40  blur-[2px]'} ${id == 3 && 'top-[-0px] scale-80 z-30  blur-[2px]'} ${id == 4 && 'top-[-70px] z-20 scale-70 blur-[2px]'}`}>
        <div className="md:flex ">
            <div className="w-full md:w-1/3 img">
                <div className="img rounded-lg overflow-hidden w-full lg:aspect-square">
                    {img && <Image className="w-full" src={img} alt="serviceImage"/> }
                </div>
            </div>
            <div className="w-full md:w-2/3 txt md:pl-6 lg:pl-12 pt-5 md:pt-0">
                <span className="rounded-full px-5 py-1 inline-block font-bold bg-clr-secondary"><GradientColor text={`Service ${id}`}/></span> 
                <h3  className=" text-clr text-xl xl:text-5xl font-semibold my-3">{title}</h3>
                <p className=" text-clr-text text-sm lg:text-lg font-normal leading-8 pb-5">{desc}</p>
                {link &&
                <Link className=" border-2 border-clr-secondary rounded-lg px-5 py-2 text-clr-text text-base font-semiBold" href={link} >Read More</Link>
                }
            </div>
        </div>
    </div>
  )
}
