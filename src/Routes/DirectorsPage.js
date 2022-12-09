import React from "react";
import { DirectorHero } from "../Components/DirectorPageComponents/DirectorHero";
import { Message } from "../Components/DirectorPageComponents/Message";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export const DirectorsPage = () => {
  return (
   
      <>
        <Navbar />
        <DirectorHero />
        <Message />
        <Footer />
      </>
    
  );
};
