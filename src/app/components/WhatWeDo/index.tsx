import { TiArrowLeftOutline } from "react-icons/ti";
import Title from "../utils/Title";
import ServiceItem from "../utils/ServiceItem";
import imgOne from "@/app/assets/images/Image.png"
import bg from "@/app/assets/images/bg_el.png"
import Button from "../utils/Button";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <>
      <section className="services relative" id="service_sect">
        <Image src={bg} alt="bg shape" className="absolute left-0 top-0"/>
        <div className="container mx-auto py-20">
        <div className="title text-center">
          <Title title="What We Do" icon={<TiArrowLeftOutline/>}/>
          <h2 className=" text-clr text-5xl font-semibold mt-10">Our Popular Services</h2>
        </div>
        <div className="services_box relative z-10 mt-20">
          <span className="bg-gradient-to-r from-g2 -z-10 to-g1 block w-52 h-52 blur-3xl absolute right-20 -top-10"></span>
          <ServiceItem img={imgOne} title="One-to-one Consulting" desc="Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event." link="/" id={1} />
          <ServiceItem img={imgOne} title="One-to-one Consulting" desc="Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event." link="/" id={2} />
          <ServiceItem img={imgOne} title="One-to-one Consulting" desc="Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event." link="/" id={3} />
          <ServiceItem img={imgOne} title="One-to-one Consulting" desc="Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event." link="/" id={4} />

          {/* Button */}
          <div className="text-center pt-52">
            <Button text="View all services"/>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
