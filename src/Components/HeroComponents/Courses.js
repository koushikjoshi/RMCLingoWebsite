import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import "./Courses.css";

export const Courses = () => {
  return (
    <div className="Courses">
      <h1 className="Courses-header">Courses</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className="Courses-carousel"
        containerClass="container-with-dots"
        dotListClass="links"
        draggable
        focusOnSelect={true}
        infinite
        itemClass="Courses-card"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="Courses-card" id="courses-id">
          <Link to="/Germany">
            <img
              src={require("../../Assets/germany.png")}
              alt="German Language"
            />
            <h4 className="Courses-title">German Language</h4>
          </Link>
        </div>
        <div className="Courses-card">
          <Link to="/French">
            <img
              src={require("../../Assets/france.png")}
              alt="French Language"
            />
            <h4 className="Courses-title">French Language</h4>
          </Link>
        </div>
        <div className="Courses-card">
          <Link to="/Spanish">
            <img
              src={require("../../Assets/spain.png")}
              alt="Spanish Language"
            />
            <h4 className="Courses-title">Spanish Language</h4>
          </Link>
        </div>
        <div className="Courses-card">
          <Link to="Japanese">
            <img
              src={require("../../Assets/japan.png")}
              alt="Japanese Language"
            />
            <h4 className="Courses-title">Japanese Language</h4>
          </Link>
        </div>
        <div className="Courses-card">
          <Link to="Russian">
            <img
              src={require("../../Assets/russia.png")}
              alt="Russian Language"
            />
            <h4 className="Courses-title">Russian Language</h4>
          </Link>
        </div>
        <div className="Courses-card">
          <Link to="/Arabic">
            <img
              src={require("../../Assets/dubai.png")}
              alt="Arabic Language"
            />
            <h4 className="Courses-title">Arabic Language</h4>
          </Link>
        </div>
        <div className="Courses-card">
          <Link to="/Korean">
            <img
              src={require("../../Assets/korea.png")}
              alt="Korean Language"
            />
            <h4 className="Courses-title">Korean Language</h4>
          </Link>
        </div>
        <div className="Courses-card">
          <Link to="/English">
            <img
              src={require("../../Assets/england.png")}
              alt="English Language"
            />
            <h4 className="Courses-title">English Language</h4>
          </Link>
        </div>
      </Carousel>
      <Link to="/Courses"> <button className="Courses-button"> Learn More</button> </Link>
    </div>
  );
};
