"use client";
import Image from "next/image";
import aboutImgOne from "@/app/assets/images/abtOne.png";
import aboutImgTwo from "@/app/assets/images/abtTwo.png";
import ceo from "@/app/assets/images/ceo.png";
import ceoSign from "@/app/assets/images/ceoSign.png";
import txt from "@/app/assets/images/txt.png";
import tngle from "@/app/assets/images/tngle.png";
import Button from "../utils/Button";
import Title from "../utils/Title";
import { TiArrowLeftOutline } from "react-icons/ti";
import { easeInOut, motion } from "framer-motion";

export default function About() {
  const listVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
  };
  return (
    <>
      <section className="about_sect py-8 md:py-16 px-3 sm:px-0">
        <div className="container mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 pr-10 pl-10 md:pl-0 lg:pr-20 xl:pr-0">
              <div className="abt_img flex items-end">
                <motion.div  initial={{ scale: .5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        viewport={{ once: true, amount: 0.4 }} className="img h-60 md:h-96 xl:h-[452px]  border-2 border-white rounded-lg overflow-hidden">
                  <Image src={aboutImgOne} alt="about Img" />
                </motion.div>
                <div className="relative">
                  <motion.div initial={{ opacity: 0 }}
                        whileInView={{opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 1.2,
                        }}
                        viewport={{ once: true, amount: 0.4 }}   className="txt_circle absolute left-full md:left-2/3 -translate-x-1/2 top-10 md:top-0  -translate-y-1/2 w-40 h-40">
                    <Image
                      className="w-20 md:w-40 rotate-360 h-20 md:h-40 absolute block top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                      src={txt}
                      alt="txt"
                    />
                    <Image
                      className="w-5 h-5 absolute block top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                      src={tngle}
                      alt="tngle"
                    />
                  </motion.div>
                  <motion.div initial={{ scale: .5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                        viewport={{ once: true, amount: 0.4 }}  className="img h-40 sm:h-62 md:h-68  border-4 border-white rounded-lg -mb-5 sm:-mb-15 -ml-5 sm:-ml-15 overflow-hidden">
                    <Image src={aboutImgTwo} alt="about Img" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="abt_txt">
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                  className=""
                >
                  <Title title="Know About Us" icon={<TiArrowLeftOutline />} />
                </motion.div>
                <motion.h2
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className=" text-clr text-2xl xl:text-5xl font-semibold mt-10"
                >
                  All-in-one web solution for your business
                </motion.h2>
                <motion.p
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className=" text-clr-text text-sm xl:text-lg font-normal leading-8 pt-4 pb-8"
                >
                  We are creative agency, we are here to helping your business
                  growth consectetur adipiscing.
                </motion.p>
                <motion.ul
                  variants={listVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.li
                    key="1"
                    variants={itemVariant}
                    className=" text-clr-text flex gap-4 xl:gap-8 items-center text-sm xl:text-lg font-normal pb-2 leading-7"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-l from-[#2f25c0] to-g1"></span>{" "}
                    There are many variations of passages available
                  </motion.li>
                  <motion.li
                    key="2"
                    variants={itemVariant}
                    className=" text-clr-text flex gap-4 xl:gap-8 items-center text-sm xl:text-lg font-normal pb-2 leading-7"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-l from-[#2f25c0] to-g1"></span>{" "}
                    Majority have suffered alteration in some form
                  </motion.li>
                  <motion.li
                    key="3"
                    variants={itemVariant}
                    className=" text-clr-text flex gap-4 xl:gap-8 items-center text-sm xl:text-lg font-normal pb-2 leading-7"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-l from-[#2f25c0] to-g1"></span>{" "}
                    Contrary to popular belief is not simply random
                  </motion.li>
                </motion.ul>
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut",delay:.4 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex flex-col-reverse sm:flex-row sm:items-center gap-10 pt-10"
                >
                  <span>
                    <Button text="More about us" />
                  </span>
                  <div className="ceo">
                    <div className="img flex items-center gap-5">
                      <div className="ceo_img shadow-lg shadow-g4/50 w-15  h-15 rounded-full overflow-hidden p-1 bg-gradient-to-b from-g1 to-g2/0">
                        <Image
                          src={ceo}
                          alt="ceo img"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="">
                        <Image
                          src={ceoSign}
                          alt="ceo img"
                          className="border-b-2 border-clr-brdr/20 pb-1 w-20 xl:w-28"
                        />
                        <p className=" text-clr-text text-sm font-normal leading-8 ">
                          CEO at Company
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
