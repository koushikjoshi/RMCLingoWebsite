import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./MainComponent.css";
import { icons } from "react-icons";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";

const MainComponent = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const smallHeadingArray = [
    "Welcome To RMC Lingo – The proactive language lab!",
    "Learn A New Foreign Language With RMC Lingo",
    "Study A Foreign Language with RMC Lingo",
    "We at RMC Lingo are enthusiastic about offering many foreign languages",
    "Welcome To RMC Lingo – The proactive language lab!",
  ];
  const mainHeadingArray = [
    "Value 1",
    "Value 2",
    "Value 3",
    "Value 4",
    "Value 5",
  ];
  const subHeadingArray = [
    "Value 1",
    "Value 2",
    "Value 3",
    "Value 4",
    "Value 5",
  ];
  const imageArray = [img1, img2, img3, img4, img5];

  useEffect(() => {
    let visibilityChange;
    if (typeof document.hidden !== "undefined") {
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      visibilityChange = "webkitvisibilitychange";
    }

    const handleVisibilityChange = () => {
      if (document.hidden || document.msHidden || document.webkitHidden) {
        clearInterval(intervalRef.current);
      } else {
        intervalRef.current = setInterval(() => {
          setIndex((index + 1) % smallHeadingArray.length);
        }, 5000);
      }
    };

    document.addEventListener(visibilityChange, handleVisibilityChange);

    return () => {
      document.removeEventListener(visibilityChange, handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((index + 1) % smallHeadingArray.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [index]);

  return (
    <div className="banner-container">
      <div className="banner-image-container">
        <div className="overlay"></div>
        <img src={imageArray[index]} alt="Banner" className="BannerImg" />
      </div>

      <div className="banner-text-container">
        <div className="small-heading">{smallHeadingArray[index]}</div>
        <div className="main-heading">{mainHeadingArray[index]}</div>
        <div className="sub-heading">{subHeadingArray[index]}</div>
        <div className="button-container">
          <button className="button">
            Explore Courses <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
