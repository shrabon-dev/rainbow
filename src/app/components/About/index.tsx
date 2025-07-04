import Image from 'next/image'
import aboutImgOne from '@/app/assets/images/abtOne.png'
import aboutImgTwo from '@/app/assets/images/abtTwo.png'
import ceo from '@/app/assets/images/ceo.png'
import ceoSign from '@/app/assets/images/ceoSign.png'
import txt from '@/app/assets/images/txt.png'
import tngle from '@/app/assets/images/tngle.png'
import Button from '../utils/Button'
import Title from '../utils/Title'
import { TiArrowLeftOutline } from "react-icons/ti";

export default function About() {
  return (
    <>
      <section className='about_sect py-16'>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-1/2">
              <div className="abt_img flex items-end">
                <div className="img  border-2 border-white rounded-lg overflow-hidden">
                  <Image src={aboutImgOne} alt='about Img'  />
                </div>
                <div className="relative">
                  <div className="txt_circle absolute left-2/3 -translate-x-1/2 top-0  -translate-y-1/2 w-40 h-40">
                    <Image className='w-40 h-40 absolute block top-0 left-0 -translate-x-1/2 -translate-y-1/2' src={txt} alt='txt'/>
                    <Image className='w-5 h-5 absolute block top-0 left-0 -translate-x-1/2 -translate-y-1/2' src={tngle} alt='tngle'/>
                  </div>
                  <div className="img border-4 border-white rounded-lg -mb-15 -ml-15 overflow-hidden">
                    <Image src={aboutImgTwo} alt='about Img'  />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
                <div className="abt_txt">
                  <Title title='Know About Us' icon={<TiArrowLeftOutline/>}/>
                  <h2 className=" text-clr text-5xl font-semibold mt-10">All-in-one web solution for your business</h2>
                  <p className=" text-clr-text text-lg font-normal leading-8 pt-4 pb-8">We are creative agency, we are here to helping your business growth consectetur adipiscing.</p>
                  <ul>
                    <li className=" text-clr-text flex gap-8 items-center text-lg font-normal pb-2 leading-7"><span className='inline-block w-2 h-2 rounded-full bg-gradient-to-l from-[#2f25c0] to-g1'></span> There are many variations of passages available</li>
                    <li className=" text-clr-text flex gap-8 items-center text-lg font-normal pb-2 leading-7"><span className='inline-block w-2 h-2 rounded-full bg-gradient-to-l from-[#2f25c0] to-g1'></span> Majority have suffered alteration in some form</li>
                    <li className=" text-clr-text flex gap-8 items-center text-lg font-normal pb-2 leading-7"><span className='inline-block w-2 h-2 rounded-full bg-gradient-to-l from-[#2f25c0] to-g1'></span> Contrary to popular belief is not simply random</li>
                  </ul>
                  <div className="flex items-center gap-10 pt-10">
                      <Button text='More about us'/>
                      <div className="ceo">
                        <div className="img flex items-center gap-5">
                          <div className="ceo_img shadow-lg shadow-g4/50 w-15 h-15 rounded-full overflow-hidden p-1 bg-gradient-to-b from-g1 to-g2/0">
                          <Image src={ceo} alt='ceo img' className='w-full h-full object-cover rounded-full'/>
                          </div>
                          <div className=''>
                            <Image src={ceoSign} alt='ceo img' className='border-b-2 border-clr-brdr/20 pb-1 w-28'/>
                            <p className=" text-clr-text text-sm font-normal leading-8 ">CEO at Company</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
