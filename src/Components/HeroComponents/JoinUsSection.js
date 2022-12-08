import React from "react";
import { BsBook } from "react-icons/bs";
import "./JoinUsSection.css";

export const JoinUsSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offline">
          <div className="offlineiconheading">
            <i className="px-3">
              <BsBook />
            </i>
            <h6>Offline Courses</h6>
          </div>
          <div className="offlinetext">
            <h4>Get The Best Courses & Upgrade Your Skills</h4>
          </div>
          <div className="buttonjoinus">
            <button className="buttonjoin">Join With Us</button>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 online">
          <div className="offlineiconheading">
            <i className="px-3">
              <BsBook />
            </i>
            <h6>Online Courses</h6>
          </div>
          <div className="offlinetext">
            <h4>Get The Best Courses & Upgrade Your Skills</h4>
          </div>
          <div className="buttonjoinus">
            <button className="buttonjoin">Join With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};
