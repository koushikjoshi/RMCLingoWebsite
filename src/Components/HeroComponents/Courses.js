import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        dotListClass=""
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
          <img src="https://via.placeholder.com/150" alt="German Language" />
          <h4 className="Courses-title">German Language</h4>
        </div>
        <div className="Courses-card">
          <img src="https://via.placeholder.com/150" alt="French Language" />
          <h4 className="Courses-title">French Language</h4>
        </div>
        <div className="Courses-card">
          <img src="https://via.placeholder.com/150" alt="Spanish Language" />
          <h4 className="Courses-title">Spanish Language</h4>
        </div>
        <div className="Courses-card">
          <img src="https://via.placeholder.com/150" alt="Japanese Language" />
          <h4 className="Courses-title">Japanese Language</h4>
        </div>
        <div className="Courses-card">
          <img src="https://via.placeholder.com/150" alt="Russian Language" />
          <h4 className="Courses-title">Russian Language</h4>
        </div>
        <div className="Courses-card">
          <img src="https://via.placeholder.com/150" alt="Arabic Language" />
          <h4 className="Courses-title">Arabic Language</h4>
        </div>
        <div className="Courses-card">
          <img src="https://via.placeholder.com/150" alt="Korean Language" />
          <h4 className="Courses-title">Korean Language</h4>
        </div>
        <div className="Courses-card">
          <img src="https://via.placeholder.com/150" alt="English Language" />
          <h4 className="Courses-title">English Language</h4>
        </div>
      </Carousel>
      <button className="Courses-button">Learn More</button>
    </div>
  );
};
