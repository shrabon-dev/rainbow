import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function WorkItem({img,date,title,link,slideClass}:{img?:StaticImageData,date?:string,title?:string,link?:string,slideClass?:string}) {
    const styles = {
        backgroundImage: img ? `url(${img.src})`:undefined,

    }
  return (
    <>
        <div className={`work_item ${slideClass} aspect-square relative flex items-end bg-no-repeat bg-cover bg-center p-10 border-4 rounded-2xl border-white shadow-xl`} style={styles}>
            {slideClass == 'first_active' &&
            <div className="info w-full">
                <span className="date text-sm font-medium text-white  bg-gradient-to-tr from-g4 to-g2 rounded-lg py-2 px-5">{date}</span> 
                <h4 className="title text-2xl font-semibold text-clr mt-3 bg-white rounded-lg py-2 px-5 flex items-center justify-between">{title} {link && <Link className="text-3xl  text-white  bg-gradient-to-tr from-g4 to-g2 rounded-lg p-2" href={link}><GoArrowUpRight/></Link>}</h4> 
            </div>
            }
          </div>
    </>
  )
}
