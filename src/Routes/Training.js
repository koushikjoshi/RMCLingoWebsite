import React from "react";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Organisms/Footer";
import { TrainingHero } from "../Components/Training/TrainingHero";

export const Training = () => {
  return (
    <div>
      <Navbar />
      <TrainingHero />
      <Footer />
    </div>
  );
};
