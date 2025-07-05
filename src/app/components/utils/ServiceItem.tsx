'use client';

import Image, { StaticImageData } from "next/image";
import GradientColor from "./GradientColor";
import Link from "next/link";

export default function ServiceItem({
  title,
  desc,
  link,
  img,
  id,
  activeSlide,
  onClick,
}: {
  title?: string;
  desc?: string;
  link?: string;
  img?: StaticImageData;
  id?: number;
  activeSlide?: number;
  onClick?: () => void;
}) {
  const positionIndex = (id ?? 0) - (activeSlide ?? 0);

  let extraClass = "";

  switch (positionIndex) {
    case 0: 
      extraClass = "z-50 top-[150px] scale-100 blur-0 opacity-100 pointer-events-auto";
      break;
    case -1: 
      extraClass = "absolute left-1/2 -translate-x-1/2 top-[70px] scale-90 z-40 blur-[2px]  pointer-events-none";
      break;
    case -2:  
      extraClass = "absolute left-1/2 -translate-x-1/2 top-[0px] scale-80 z-30 blur-[2px]   pointer-events-none";
      break;
    case 1:  
      extraClass = "absolute left-1/2 -translate-x-1/2 top-[60px] scale-90 z-20 blur-[2px]  pointer-events-none";
      break;
    case 2: 
      extraClass = "absolute left-1/2 -translate-x-1/2 top-[-40px] scale-65 z-10 blur-[2px] pointer-events-none";
      break;
    default: 
      extraClass = "hidden"; 
      break;
  }

  return (
    <div
      onClick={onClick}
      className={`
        absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out
        w-[300px] sm:w-[560px] md:w-[760px] lg:w-[960px] mx-auto
        shadow-2xl rounded-xl bg-white p-10
        ${extraClass}
      `}
    >
      <div className="md:flex">
        <div className="w-full md:w-1/3 img">
          <div className="img rounded-lg overflow-hidden w-full lg:aspect-square">
            {img && <Image className="w-full" src={img} alt="serviceImage" />}
          </div>
        </div>
        <div className="w-full md:w-2/3 txt md:pl-6 lg:pl-12 pt-5 md:pt-0">
          <span className="rounded-full px-5 py-1 inline-block font-bold bg-clr-secondary">
            <GradientColor text={`Service ${id}`} />
          </span>
          <h3 className="text-clr text-xl xl:text-5xl font-semibold my-3">
            {title}
          </h3>
          <p className="text-clr-text text-sm lg:text-lg font-normal leading-8 pb-5">
            {desc}
          </p>
          {link && (
            <Link
              className="border-2 border-clr-secondary rounded-lg px-5 py-2 text-clr-text text-base font-semiBold"
              href={link}
            >
              Read More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}