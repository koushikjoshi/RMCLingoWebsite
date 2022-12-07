import React from "react";
import { BsBullseye } from "react-icons/bs";
import "./AboutBanner.css";

export const AboutBanner = () => {
  return (
    <div className="aboutbannercontainer">
      <div className="elementaboutbannercontainer">
        <div className="elementaboutbanner">
          <div className="visoin">
            <div className="symbol">
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/moto_1_3-6.png"/>
              </i>
            </div>
            <div className="aboutbannerinfo">
              <h1 className="aboutbannerelementheadings">Our Vision</h1>
              <p className="aboutbannerelementtext">
                RMC Lingos’ vision is to educate, motivate and inspire students
                to interact with people from other nations or cultures in a
                multiplicity of languages. We are very enthusiastic and seeks to
                develop linguistically proficient and culturally competent
                individual who think critically and communicate effectively in
                local, national and global communities.
              </p>
            </div>
          </div>
          <div className="staff">
            <div className="symbol">
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/moto_1_3-6.png"/>
              </i>
            </div>
            <div className="aboutbannerinfo">
              <h1 className="aboutbannerelementheadings">Our Staff</h1>
              <p className="aboutbannerelementtext">
                Faculty members at RMC Lingo’s are Bona fide and experienced
                having good counselling skills who are eager to educate and help
                the students to attain specific goals. They bring their
                experience and mentorship to provide the best language
                proficiency on the global platform. With the facility of good
                training environment our teaching staffs put their best effort
                to fulfil the students doubts, desired syllabus and the course
                curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
