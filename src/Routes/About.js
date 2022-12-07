import React from "react";
import { AboutBanner } from "../Components/AboutPage/AboutBanner";
import { AboutHero } from "../Components/AboutPage/AboutHero";
import { TestimonialSlider } from "../Components/AboutPage/AboutPageCommonComponents/TestimonialSlider";
import { AboutSection } from "../Components/AboutPage/AboutSection";
import { LanguageCourses } from "../Components/AboutPage/LanguageCourses";
import { Partners } from "../Components/AboutPage/Partners";
import { Testimonials } from "../Components/AboutPage/Testimonials";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export const About = () => {
  return (
    <div className="viewport">
      <Navbar />
      <AboutHero />
      <AboutSection />
      <AboutBanner />
      <LanguageCourses />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
};
