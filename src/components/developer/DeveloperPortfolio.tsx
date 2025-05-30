import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const DeveloperPortfolio = () => {
  return (
    <section
      className='min-h-screen w-screen  flex flex-col'
      data-portfolio='dev'
    >
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </section>
  );
};

export default DeveloperPortfolio;
