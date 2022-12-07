import React from "react";
import { IconContext } from "react-icons";
import { BsClock, BsMap, BsPhone } from "react-icons/bs";
import "./GetInTouch.css";

export const GetInTouch = () => {
  return (
    <div>
      <div className="col-lg-6-md-4 sm-12">
        <h1 className="getintouch">Get In Touch</h1>
        <p className="enquiry">
          Have a inquiry or some feedback for us? Fill out the form to contact
          our team. please contact us at info@rmclingo.com.
        </p>

        <div className="col company-details">
          <div className="iconcontainer">
            <i>
              <IconContext.Provider value={{ size: "50px", }}>
                {" "}
                <BsMap />
              </IconContext.Provider>
            </i>
          </div>
          <div className="Address">
            <h6>Our Address</h6>
            <p>313, 3 rd Floor, Style Living Mall,</p>
            <p>Jasola, New Delhi - 110025</p>

          </div>
        </div>
        <div className="col company-details">
          <div className="iconcontainer">
            <i>
              <IconContext.Provider value={{ size: "50px", }}>
                {" "}
                <BsPhone />
              </IconContext.Provider>
            </i>
          </div>
          <div className="Address">
            <h6>Phone Number</h6>
            <p>Mobile: +91 9810770128</p>
            

          </div>
        </div>
        <div className="col company-details">
          <div className="iconcontainer">
            <i>
              <IconContext.Provider value={{ size: "50px", }}>
                {" "}
                <BsClock />
              </IconContext.Provider>
            </i>
          </div>
          <div className="Address">
            <h6>Email Address</h6>
            <p>info@rmclingo.com</p>
            

          </div>
        </div>
        
      </div>
    </div>
  );
};
