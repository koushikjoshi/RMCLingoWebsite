import React, { Component } from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="formMain">
      <div className="image">
        <img
          src={require("../Assets/girlpic.png")}
          className="img-fluid girlImg"
        />
      </div>
      <div className="textStuff">
        <div className="headers">
          <h4 className="topHeader">Start your journey with us!</h4>
          <h1 className="middleHeader">Find your best course</h1>
          <h6 className="bottomHeader">
            Want to unveil new beginnings? Call us at 9810770128 today! CALL NOW
          </h6>
        </div>
        <div className="input-fields">
          <div className="input-field-column">
            <input type="text" className="input-field" placeholder="Name" />
            <input
              type="text"
              className="input-field"
              placeholder="Email Address"
            />
          </div>
          <div className="input-field-column">
            <input type="text" className="input-field" placeholder="Phone" />
            <input
              type="text"
              className="input-field"
              placeholder="Language Interested"
            />
          </div>
        </div>
        <div className="buttonClass">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}
