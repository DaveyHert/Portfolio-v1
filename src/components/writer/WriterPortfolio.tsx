import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Writing from "./Writing";
import Expertise from "./Expertise";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";

const WriterPortfolio = () => {
  return (
    <section
      className='min-h-screen w-screen flex flex-col bg-[#f5f0e7] text-[#3E2723] font-roboto'
      data-portfolio='writer'
    >
      <Header />
      <Hero />
      <Writing />
      <Expertise />
      <Clients />
      <Contact />
      <Footer />
    </section>
  );
};

export default WriterPortfolio;
