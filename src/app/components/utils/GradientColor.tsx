import React from 'react'

export default function GradientColor({text,fontSize,fontWeight}: { text: string, fontSize?: string, fontWeight?: string }) {
  return (
    <span className={`${fontSize && `text-${fontSize}`} font-${fontWeight?fontWeight:'normal'} bg-clip-text text-transparent bg-gradient-to-l from-g2 to-g1`} >{text}</span>
  )
}
