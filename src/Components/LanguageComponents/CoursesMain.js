import React from "react";
import { Link } from "react-router-dom";
import "./CoursesMain.css";

export const CoursesMain = () => {
  return (
    <div>
      <div className="container-fluid" id="maincourse">
        <h1 className="title">Courses</h1>
      </div>
      <div className="languagecourses">
        <div className="langcoursetitle">
          <h4 className="secondtitle"> Our Popular Courses</h4>
        </div>
        <div className="container row langcoursecontainer">
          <div className=" col-md-6 col-lg-4 col-xxl-3 langcourse">
            <Link to="/Germany">
              <div className="langimgcontainer">
                <img
                  src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/09/pexels-ingo-joseph-109629-267x230.jpg"
                  className="langimg"
                />
              </div>
              <div className="langtitle">
                <h6 className="title3">German</h6>
              </div>
            </Link>
          </div>
          <div className=" col-md-6 col-lg-4 col-xxl-3 langcourse">
            <Link to="/Arabic">
              <div className="langimgcontainer">
                <img
                  src="https://tigtsoft.com/rmclingo/wp-content/uploads/2019/05/pexels-senuscape-1718259-267x230.jpg"
                  className="langimg"
                />
              </div>
              <div className="langtitle">
                <h6 className="title3">Arabic</h6>
              </div>
            </Link>
          </div>

          <div className=" col-md-6 col-lg-4 col-xxl-3 langcourse">
            <Link to="/French">
              <div className="langimgcontainer">
                <img
                  src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/09/pexels-david-henry-6679247-267x230.jpg"
                  className="langimg"
                />
              </div>
              <div className="langtitle">
                <h6 className="title3">French</h6>
              </div>
            </Link>
          </div>
          <div className=" col-md-6 col-lg-4 col-xxl-3 langcourse">
            <Link to="/Japanese">
              <div className="langimgcontainer">
                <img
                  src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/09/pexels-pixabay-161401-267x230.jpg"
                  className="langimg"
                />
              </div>
              <div className="langtitle">
                <h6 className="title3">Japanese</h6>
              </div>
            </Link>
          </div>
          <div className=" col-md-6 col-lg-4 col-xxl-3 langcourse">
            <Link to="/Spanish">
              <div className="langimgcontainer">
                <img
                  src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/09/pexels-mikhail-nilov-8430374-267x230.jpg"
                  className="langimg"
                />
              </div>
              <div className="langtitle">
                <h6 className="title3">Spanish</h6>
              </div>
            </Link>
          </div>
          <div className=" col-md-6 col-lg-4 col-xxl-3 langcourse">
            <Link to="/Russian">
              <div className="langimgcontainer">
                <img
                  src="https://tigtsoft.com/rmclingo/wp-content/uploads/2019/05/pexels-elina-fairytale-3810971-267x230.jpg"
                  className="langimg"
                />
              </div>
              <div className="langtitle">
                <h6 className="title3">Russian</h6>
              </div>
            </Link>
          </div>
          <div className=" col-md-6 col-lg-4 col-xxl-3 langcourse">
            <Link to="/Korean">
              <div className="langimgcontainer">
                <img
                  src="https://tigtsoft.com/rmclingo/wp-content/uploads/2019/05/pexels-ethan-brooke-2128042-267x230.jpg"
                  className="langimg"
                />
              </div>
              <div className="langtitle">
                <h6 className="title3">Korean</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
