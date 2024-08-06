"use client"
import "./page.css"
import { useEffect } from "react";
import { Navbar } from "@/pages/navbar";
import Effect from "@/pages/effect";
import Hero from "@/pages/hero";
import Expertise from "@/pages/Expertise/Expertise";
import Footer from "@/pages/footer";
import Work from "@/pages/work";
import Contact from "@/pages/contact";


export default function Home() {
  return (
    <div>

      <section id="navbar">
        <Navbar/>
      </section>

      <section id="effect">
        <Effect/>
      </section>


      <section id="home">
        <Hero/>
      </section>

      <section id="skills">
        <Expertise/>
      </section>

      <section id="experience" className="flex flex-col justify-center items-center">
          <Work/>
      </section>

      <section id="contact" className="flex flex-col justify-center items-center">
        <Contact/>
      </section>

      <section id="footer">
        <Footer/>
      </section>
      
    </div>
  );
}
