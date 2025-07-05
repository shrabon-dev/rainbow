import { StaticImageData } from "next/image";
import Link from "next/link"; 
import { GoArrowUpRight } from "react-icons/go";

export default function WorkItem({img,date,title,link,slideClass}:{img?:StaticImageData,date?:string,title?:string,link?:string,slideClass?:string,}) {
    const styles = {
        backgroundImage: img ? `url(${img.src})`:undefined,

    }
  return (
    <>
        <div className={`work_item ${slideClass == 'second_active' ? 'active':'deactive'} ${slideClass} aspect-square relative flex items-end bg-no-repeat bg-cover bg-center p-2 md:p-10 border-4 rounded-2xl border-white shadow-xl`} style={styles}>
            {slideClass == 'second_active' &&
            <div className={`info ${slideClass == 'second_active' && 'active'}  w-full`}>
                <span className="date text-xs md:text-sm font-medium text-white  bg-gradient-to-tr from-g4 to-g2 rounded-lg py-2 px-2 md:px-5">{date}</span> 
                <h4 className="title text-xs md:text-base xl:text-2xl font-semibold text-clr mt-3 bg-white rounded-lg py-2 px-2 md:px-5 flex items-center justify-between">{title} {link && <Link className="text-base md:text-3xl  text-white  bg-gradient-to-tr from-g4 to-g2 rounded-lg p-2" href={link}><GoArrowUpRight/></Link>}</h4> 
            </div>
            }
          </div>
    </>
  )
}
