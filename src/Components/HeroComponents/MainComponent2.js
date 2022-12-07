import React from "react";
import "./MainComponent2.css";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";
import { Carousel } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export const MainComponent2 = () => {
  return (
    <Carousel interval={2500} controls={false} fade={true} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: 630, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 630,
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <div
          style={{
            width: "50%",
            position: "absolute",
            top: "20%",
            left: "5%",
            color: "white",
            right: 0,
            bottom: 0,
          }}
        >
          <h4
            style={{
              padding: "10px",
            }}
          >
            Welcome To RMC Lingo - The Proactive Language lab!
          </h4>
          <h1
            style={{
              padding: "10px",
            }}
          >
            Take a jumpstart and become a linguist with RMC Lingo
          </h1>
          <h4
            style={{
              padding: "10px",
            }}
          >
            RMC Lingo invites to enter into a linguist ambience that gives you a
            chance of immersing and experiencing a new culture
          </h4>
          <div className="button-container">
            <button className="button">
              Explore Courses <FaArrowRight />
            </button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ height: 630, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 630,
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <div
          style={{
            width: "50%",
            position: "absolute",
            top: "20%",
            left: "5%",
            color: "white",
            right: 0,
            bottom: 0,
          }}
        >
          <h4
            style={{
              padding: "10px",
            }}
          >
            Learn A New Foreign Language With RMC Lingo
          </h4>
          <h1
            style={{
              padding: "10px",
            }}
          >
            Our World-class academicians train you discover your genius.
          </h1>
          <h4
            style={{
              padding: "10px",
            }}
          >
            RMC Lingo is tending to be pioneer in the field of language and keen
            to be trailblazer for the foreign language learners.
          </h4>
          <div className="button-container">
            <button className="button">
              Explore Courses <FaArrowRight />
            </button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ height: 630, objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 630,
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <div
          style={{
            width: "50%",
            position: "absolute",
            top: "20%",
            left: "5%",
            color: "white",
            right: 0,
            bottom: 0,
          }}
        >
          <h4
            style={{
              padding: "10px",
            }}
          >
            Study A Foreign Language With RMC Lingo
          </h4>
          <h1
            style={{
              padding: "10px",
            }}
          >
            RMC Lingo - The proactive way to become a linguist.
          </h1>
          <h4
            style={{
              padding: "10px",
            }}
          >
            We at RMC Lingo are enthusiastic to offer many foreign languages and
            also provide English proficiency for IELTS and TOEFL tests
            preparation.
          </h4>
          <div className="button-container">
            <button className="button">
              Explore Courses <FaArrowRight />
            </button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
