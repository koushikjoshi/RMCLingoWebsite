import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <div className="container-fluid" id="about-container">
      <div className="row">
        <div className="col-sm  AboutUsContainerinfo">
          <h1>About Us</h1>
          <p>
            The advantages of learning foreign languages are mushrooming as the
            world becomes increasingly globalized and bilingualism is now
            perhaps the most useful real-world skill to ever exist. Along with
            economic globalization, social mobility has also raised the demand
            of learning foreign languages other than English. The ability to
            communicate in multiple languages is become more and more important
            in the increasingly integrated global business communication. Due to
            overwhelming demand in various regional and foreign languages over
            the past couple of years and addressing this need of hour with a
            vision to remove communication barriers RMC Group began expanding
            its linguistic sphere with the name of RMC Lingo - The Proactive
            Language Lab; A vision to be the remarkable choice for educational
            sphere in the linguistic world. With the introduction of more than
            12+ languages like German, French, Spanish, Japanese, Arabic and
            many more under single roof. We are much and more enthusiast by
            introducing in English proficiency domain for IELTS & TOEFL
            pedagogy.d.
          </p>
          <div className="buttons">
            <Link to="/Contact"> <button className="contact"> Contact Us</button> </Link>
            
            <button className="courses">All Courses</button>
          </div>
        </div>
        <div className="col-sm aboutuscontainerpic ">
          <div className="twopics">
            <img
              src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/pexels-pixabay-267491.jpg"
              className="pictwo img-fluid"
            />
            <img
              src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/pexels-stanley-morales-1454360.jpg"
              className="pictwo img-fluid"
            />
          </div>
          <div className="onepic">
            <img
              src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/pexels-fauxels-3184644.jpg"
              className="onepice img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
