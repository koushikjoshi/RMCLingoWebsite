import React from "react";
import "./WhyStudy.css";

export const WhyStudy = () => {
  return (
    <div className="container-fluid" id="whystudy">
      <div className="row">
        <div className="col-sm-6 wsleft">
          <div className="globeimage">
            <img
              src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/12/world-map-globe-world-language-png-favpng-ZLGpNGq9pjJnWUA5jGLHwHrVb-removebg-preview.png"
              className="img-fluid"
            ></img>
            {/* <div className="container student-count">
              <h6>Total Student Count</h6>
              <div className="avatar-list">
                <div className="avatar">
                  <img src="https://angfuzsoft.com/themeforest/wordpress/fresh/wp-content/uploads/2022/08/student_1_1.png"></img>
                </div>
                <div className="avatar">
                  <img src="https://angfuzsoft.com/themeforest/wordpress/fresh/wp-content/uploads/2022/08/student_1_1.png"></img>
                </div>
                <div className="avatar">
                  <img src="https://angfuzsoft.com/themeforest/wordpress/fresh/wp-content/uploads/2022/08/student_1_1.png"></img>
                </div>
                <div className="avatar">
                  <img src="https://angfuzsoft.com/themeforest/wordpress/fresh/wp-content/uploads/2022/08/student_1_1.png"></img>
                </div>
                <div className="count">
                  <span>1000+</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-sm-6 wsright">
          <div className="container titles">
            <h2 className="wsmaintitle">Why Study a foreign Language?</h2>
            <h4 className="wssectitle">About RMC Lingo Training</h4>
          </div>
          <div className="wslists">
            <ul className="wsrightlist">
              <li className="ticklist">
                Foreign language study creates more positive attitude and
                chances of getting a job.
              </li>
              <li className="ticklist">
                International travel is made easier and analytical skills
                improve when student study a foreign language.
              </li>
              <li className="ticklist">
                Foreign language provides a competitive edge in career choices.
              </li>
              <li className="ticklist">
                The study of foreign language improves one’s own language
                enhances English vocabulary and listening skills.
              </li>
              <li className="ticklist">
                Foreign languages open the door to art, music, dance, fashion,
                cuisine, film, philosophy and science.
              </li>
              <li className="ticklist">
                Foreign languages expand one’s view of the world, liberalize
                one’s experiences and make one more flexible and tolerant.
              </li>
              <li className="ticklist">
                Foreign language study is simply a part of a very basic liberal
                education: to “educate” is to lead out, to lead out of
                confinement, narrowness and darkness.
              </li>
            </ul>

            <button className=" explore">Explore Training</button>
          </div>
        </div>
      </div>
    </div>
  );
};
