import React, { ReactNode } from 'react'

export default function Icon({icon,clr,size}:{icon?:ReactNode, clr?:string, size?:string}) {
  return (
    <>
    <span className={`icon w-13 h-13 text-${size} text-${clr} border-2 border-clr-brdr/20 rounded-full flex items-center justify-center`}>
        {icon}
        {/* <BiPhoneCall className='text-3xl text-g1'/> */}
    </span>
    </>
  )
}
