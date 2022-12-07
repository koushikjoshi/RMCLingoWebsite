import { Button } from "bootstrap";
import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineArrowRight, BsGlobe } from "react-icons/ai";
import "./LanguageCourses.css";
export const LanguageCourses = () => {
  return (
    <div className="container-fluid" id="languagecourse">
      <div className="row align-items-start">
        <h1>Languages Offered</h1>
        <div className="col languagecontainer">
          <div className="box">
            <IconContext.Provider value={{ color: "blue" }}>
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
              </i>
              <div className="Language">German</div>
              <button className="arrow">
                <AiOutlineArrowRight />
              </button>
            </IconContext.Provider>
          </div>
        </div>
        <div className="col languagecontainer">
          <div className="box">
            <IconContext.Provider value={{ color: "blue" }}>
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
              </i>
              <div className="Language">German</div>
              <button className="arrow">
                <AiOutlineArrowRight />
              </button>
            </IconContext.Provider>
          </div>
        </div>
        <div className="col languagecontainer ">
          <div className="box">
            <IconContext.Provider value={{ color: "blue" }}>
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
              </i>
              <div className="Language">German</div>
              <button className="arrow">
                <AiOutlineArrowRight />
              </button>
            </IconContext.Provider>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col languagecontainer">
            <div className="box">
              <IconContext.Provider value={{ color: "blue" }}>
                <i>
                  <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
                </i>
                <div className="Language">German</div>
                <button className="arrow">
                  <AiOutlineArrowRight />
                </button>
              </IconContext.Provider>
            </div>
          </div>
          <div className="col languagecontainer">
            <div className="box">
              <IconContext.Provider value={{ color: "blue" }}>
                <i>
                  <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
                </i>
                <div className="Language">German</div>
                <button className="arrow">
                  <AiOutlineArrowRight />
                </button>
              </IconContext.Provider>
            </div>
          </div>
          <div className="col languagecontainer">
            <div className="box">
              <IconContext.Provider value={{ color: "blue" }}>
                <i>
                  <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
                </i>
                <div className="Language">German</div>
                <button className="arrow">
                  <AiOutlineArrowRight />
                </button>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-bottom">
        <div className="col languagecontainer">
          <div className="box">
            <IconContext.Provider value={{ color: "blue" }}>
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
              </i>
              <div className="Language">German</div>
              <button className="arrow">
                <AiOutlineArrowRight />
              </button>
            </IconContext.Provider>
          </div>
        </div>
        <div className="col languagecontainer">
          <div className="box">
            <IconContext.Provider value={{ color: "blue" }}>
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
              </i>
              <div className="Language">German</div>
              <button className="arrow">
                <AiOutlineArrowRight />
              </button>
            </IconContext.Provider>
          </div>
        </div>
        <div className="col languagecontainer">
          <div className="box">
            <IconContext.Provider value={{ color: "blue" }}>
              <i>
                <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/counter_1_2-6.svg"></img>
              </i>
              <div className="Language">German</div>
              <button className="arrow">
                <AiOutlineArrowRight />
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
