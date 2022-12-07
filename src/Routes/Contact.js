import React from "react";
import { ContactHero } from "../Components/ContactComponents/ContactHero";
import { GetInTouch } from "../Components/ContactComponents/GetInTouch";
import "../App.css";
import ContactForm from "../Components/ContactComponents/ContactForm";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid" id="contactpage">
        <div className="row">
          <ContactHero />
          <div className="col">
            <GetInTouch />
          </div>
          <div className="col">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
