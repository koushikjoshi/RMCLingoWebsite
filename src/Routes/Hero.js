import React from "react";
import Header from "../Components/HeroComponents/Header";
import { Navbar } from "../Components/Navbar";
import MainComponent from "../Components/HeroComponents/MainComponent";
import { Welcome } from "../Components/HeroComponents/Welcome";
import "../Components/HeroComponents/Hero.css";
import { Courses } from "../Components/HeroComponents/Courses";
import { MainComponent2 } from "../Components/HeroComponents/MainComponent2";
import { Footer } from "../Components/Footer";
import Form from "../Components/Form";

export const Hero = () => {
  return (
    <div>
      <Navbar />
      <MainComponent2 />
      <div className="WelcomeClass">
        <Welcome />
      </div>
      <Courses />
      <Form />
      <Footer />
    </div>
  );
};
