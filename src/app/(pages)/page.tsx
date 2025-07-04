import Feedback from "../components/Feedback";
import CompanySummery from "../components/CompanySummery";
import About from "../components/About";
import Footer from "../components/Foooter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marque";
import Navbar from "../components/Navbar";
import WhatWeDo from "../components/WhatWeDo";
import Works from "../components/Works";

export default function Home() {
  return (
   <>
      <Header/>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
      <CompanySummery/>
      <WhatWeDo/>
      <Works/>
      <Feedback/>
      <Footer/>
   </>
  );
}
