import React from "react";
import { BsCheck } from "react-icons/bs";

import "./Welcome.css";

export const Welcome = () => {
  return (
    <div id="welcome">
      <div className="d-none d-sm-block welcome-empty-image-section"> </div>
      <div className="welcome-text-section">
        <h2 className="welcome-text">Welcome To</h2>
        <h3 className="rmc-text">RMC Lingo – The proactive language lab!</h3>
        <p className="welcome-rmc-about-text">
          RMC Lingo invites you to enter into a linguistic ambiance that gives
          you a chance of immersing and experiencing a new culture. The
          institution offers customized programmes to impart the need of
          students, working professionals, and corporate houses. RMC Lingo is
          tending to be a pioneer in the field of foreign language and is keen
          to be a trailblazer for foreign language learners. We at RMC Lingo are
          enthusiastic about offering many foreign languages and also provide
          English proficiency for IELTS and TOEFL test preparation.
        </p>
        <div className="welcome-lists">
          <ul className="welcome-first-list">
            <li className="welcome-first-list-1">
              {" "}
              <BsCheck />
              <h2 className="welcome-checklist-title">
                {" "}
                <i className="welcome-list-title"></i>Personalisation
              </h2>
              <p className="check-text">
                The language course at RMC Lingo can be personalized based on
                the requirement of the candidate.
              </p>
            </li>
            <li className="welcome-first-list-1">
              <i className="welcome-list-title">
                {" "}
                <BsCheck />
                <h2 className="welcome-checklist-title">Flexible</h2>
              </i>
              <p className="check-text">
                The language course at RMC Lingo can be personalized based on
                the requirement of the candidate.
              </p>
            </li>
          </ul>
          <ul className="welcome-second-list">
            <li>
              <i className="welcome-list-title">
                {" "}
                <BsCheck />
                <h3 className="welcome-checklist-title">
                  Certification programs
                </h3>
              </i>
              <p className="check-text">
                The language course at RMC Lingo can be personalized based on
                the requirement of the candidate.
              </p>
            </li>
            <li>
              <i className="welcome-list-title">
                {" "}
                <BsCheck />
                <h3 className="welcome-checklist-title">
                  Placement Opportunity
                </h3>
              </i>
              <p className="check-text">
                The language course at RMC Lingo can be personalized based on
                the requirement of the candidate.
              </p>
            </li>
          </ul>
        </div>
        <button className="welcome-know-more-button">Know More</button>
      </div>
    </div>
  );
};
