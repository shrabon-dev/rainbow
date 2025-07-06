"use client";
import React from "react";
import footer_avatar from "@/app/assets/images/footer_avartar.png";
import flogo from "@/app/assets/images/flogo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import event from "@/app/assets/images/event/evnt.png";
import GradientColor from "../utils/GradientColor";
import Newsletter from "../Newsletter";
import { motion } from "motion/react";
export default function Footer() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <footer className="overflow-hidden relative">
      <div className="avt absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/2">
        <Image
          src={footer_avatar}
          alt="avatar"
          className="w-32 rotate-360 blur-sm"
        />
      </div>
      <div className="avt absolute bottom-0 right-0 z-10  -translate-x-1/2">
        <Image
          src={footer_avatar}
          alt="avatar"
          className="w-32 rotate-360 blur-sm"
        />
      </div>
      <div className="bg-dark pt-5 md:pt-24 relative z-0">
        <div className="container mx-auto">
          <div className="md:flex flex-wrap justify-between items-start">
            <div className="lg:w-1/3 p-5">
              <div className="bg-black/10 p-1 rounded-lg relative overflow-hidden ">
                <span className="bg-conic from-g1/0 via-g1/5 to-100% from-90% via-20% to-g2/20 block absolute w-[140%] h-[180%] rotate-360 top-[-30%] -right-1/4   z-0"></span>
                <div className="compny relative z-50 bg-card p-10 rounded-lg shadow-lg">
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="logo"
                  >
                    <Image src={flogo} alt="footer logo" />
                  </motion.div>
                  <motion.p
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="font-normal text-sm text-white leading-7 py-5"
                  >
                    Introducing our team of talented and skilled professionals
                    who are ready to increase your productivity and bring your
                    business.
                  </motion.p>
                  <div className="time">
                    <motion.p
                      initial={{ y: 60, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      viewport={{ once: true, amount: 0.4 }}
                      className="font-normal text-base text-white/80 leading-7"
                    >
                      We Are Available !!
                    </motion.p>
                    <motion.h6
                      initial={{ y: 60, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                      viewport={{ once: true, amount: 0.4 }}
                      className="font-medium text-lg text-white"
                    >
                      Mon-Sat: 10:00am - 08:00pm
                    </motion.h6>
                  </div>
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="s_link pt-6 flex gap-5"
                  >
                    <span>
                      <Link
                        className="text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center"
                        href="/"
                      >
                        {" "}
                        <FaFacebook />
                      </Link>
                    </span>
                    <span>
                      <Link
                        className="text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center"
                        href="/"
                      >
                        {" "}
                        <FaLinkedinIn />
                      </Link>
                    </span>
                    <span>
                      <Link
                        className="text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center"
                        href="/"
                      >
                        {" "}
                        <FaXTwitter />
                      </Link>
                    </span>
                    <span>
                      <Link
                        className="text-clr-text bg-white/5 w-10 h-10 rounded-lg inline-flex justify-center items-center"
                        href="/"
                      >
                        {" "}
                        <FaInstagram />
                      </Link>
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 p-5">
              <div className="bg-black/10 p-1 rounded-lg relative overflow-hidden">
                <span className="bg-gradient-to-r from-g1/20 to-g2/20 block absolute w-[120%] h-[120%] top-0 right-0 rotate-360 z-0"></span>
                <div className="fmenus bg-card p-10 rounded-lg shadow-lg relative z-50">
                  <div className="sm:flex flex-wrap justify-between items-start">
                    <div className="mb-6 md:mb-0 sm:w-1/2 md:w-1/3 lg:w-1/3">
                      <motion.h4
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="font-semibold text-lg md:text-2xl text-white"
                      >
                        Quick Links
                      </motion.h4>
                      <motion.ul
                        variants={listVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-1 md:space-y-3 pt-2 md:pt-8"
                      >
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            About Company
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Strategy
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Investor Presentation
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Investor Career
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Meet Our Team{" "}
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Get in Touch
                          </Link>
                        </motion.li>
                      </motion.ul>
                    </div>
                    <div className="mb-6 md:mb-0 sm:w-1/2 md:w-1/3 lg:w-1/3">
                      <motion.h4
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="font-semibold  text-lg md:text-2xl text-white"
                      >
                        Our Services
                      </motion.h4>
                      <motion.ul
                        variants={listVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-1 sm:space-y-3 pt-2 md:pt-8"
                      >
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Business Consulting
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Finance Strategy
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Investor Presentation
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Investor Career
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Marketing Analysis
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                          <Link
                            className="font-normal text-xs md:text-base text-white/90"
                            href="/"
                          >
                            Tax Preparation
                          </Link>
                        </motion.li>
                      </motion.ul>
                    </div>
                    <div className="mb-6 md:mb-0 sm:w-full md:w-1/3 lg:w-1/3 sm:pt-10 md:pt-0">
                      <motion.h4
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="font-semibold  text-lg md:text-2xl text-white"
                      >
                        Upcoming Event
                      </motion.h4>
                      <motion.ul
                        variants={listVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-3 pt-2 md:pt-8"
                      >
                        <motion.li
                          variants={itemVariant}
                          className="flex items-center gap-3 pb-1 md:pb-4"
                        >
                          <span className="img w-12 h-12 border-2 rounded-full overflow-hidden">
                            <Image src={event} alt="event image" />
                          </span>
                          <span>
                            <Link
                              className="font-medium block text-xs md:text-base text-white/90"
                              href="/"
                            >
                              Business Consulting
                            </Link>
                            <Link
                              className="font-extralight block text-xs md:text-base text-white/90"
                              href="/"
                            >
                              26 March, USA
                            </Link>
                          </span>
                        </motion.li>
                        <motion.li
                          variants={itemVariant}
                          className="flex items-center gap-3  pb-1 md:pb-4"
                        >
                          <span className="img w-12 h-12 border-2 rounded-full overflow-hidden">
                            <Image src={event} alt="event image" />
                          </span>
                          <span>
                            <Link
                              className="font-medium block text-xs md:text-base text-white/90"
                              href="/"
                            >
                              Email Marketing
                            </Link>
                            <Link
                              className="font-extralight block text-xs md:text-base text-white/90"
                              href="/"
                            >
                              26 March, USA
                            </Link>
                          </span>
                        </motion.li>
                        <motion.li
                          variants={itemVariant}
                          className="flex items-center gap-3 pb-1 md:pb-4"
                        >
                          <span className="img w-12 h-12 border-2 rounded-full overflow-hidden">
                            <Image src={event} alt="event image" />
                          </span>
                          <span>
                            <Link
                              className="font-medium block text-xs md:text-base text-white/90"
                              href="/"
                            >
                              Cultures of Creativity
                            </Link>
                            <Link
                              className="font-extralight block text-xs md:text-base text-white/90"
                              href="/"
                            >
                              26 March, USA
                            </Link>
                          </span>
                        </motion.li>
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:p-0">
              <Newsletter />
            </div>
          </div>
          <motion.div  initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                        viewport={{ once: true, amount: 0.4 }} className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center py-5 md:py-16">
            <div className="md:w-1/2">
              <p className="font-normal text-base text-white ">
                {" "}
                © 2024 <GradientColor text="Rainbow Themes" />. All Rights
                Reserved.
              </p>
            </div>
            <div className="md:w-1/2">
              <ul className="flex justify-end items-center gap-5">
                <li>
                  <Link
                    className="font-extralight text-base text-white"
                    href={"/"}
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-extralight text-base text-white flex items-center gap-2"
                    href={"/"}
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 inline-block"></span>{" "}
                    Privecy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-extralight text-base text-white flex items-center gap-2"
                    href={"/"}
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 inline-block"></span>{" "}
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
