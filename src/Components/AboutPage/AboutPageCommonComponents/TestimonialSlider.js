import React from "react";
import "./TestimonialSlider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import student1 from "../AboutPageCommonComponents/CommonAssets/student1.jpg"
import student2 from "../AboutPageCommonComponents/CommonAssets/student2.jpg"
import student3 from "../AboutPageCommonComponents/CommonAssets/student3.jpg"

export const TestimonialSlider = () => {
  return (
    <div className="container-fluid-carousel">
      <Carousel
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        width="800px"
        dynamicHeight={true}
        interval={3000}
        //transitionTime={2000}
      >
        <div>
        <img src={student1}className="testimonialimg" />
          <p className="legend">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit."
          </p>
        </div>
        <div>
        <img src={student2}className="testimonialimg" /> 
          <p className="legend">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit."
          </p>
        </div>
        <div>
        <img src={student3}className="testimonialimg" />
          <p className="legend">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit."
          </p>
        </div>
      </Carousel>
    </div>
  );
};
