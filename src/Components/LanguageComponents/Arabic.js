import React from "react";
import "./Style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Navbar } from "../Navbar";
import { Button } from "react-bootstrap";
import {
  FaAddressBook,
  FaBookOpen,
  FaClock,
  FaBookmark,
  FaStar,
} from "react-icons/fa";

export const Arabic = () => {
  return (
    <div className="mainLangContent">
      <Navbar />
      <div className="bannerImg">
        <div className="TitleText">
          <h2 style={{ "font-size": 50 }}>ARABIC LANGUAGE</h2>
        </div>
      </div>
      <div className="topElementsLang">
        <div className="mainImg">
          <div className="courseImage">
            <img
              src="https://images.pexels.com/photos/2239422/pexels-photo-2239422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="courseImg"
            ></img>
          </div>
          <div className="courseName">
            <h2 style={{ "font-size": 30, "font-weight": "bolder" }}>
              ARABIC LANGUAGE
            </h2>
          </div>
          <div className="batchTime" style={{ "margin-bottom": "30px" }}>
            <FaClock />
            <span
              style={{
                "font-size": 18,
                "font-weight": "bold",
              }}
            >
              {" "}
              20 Jan, 2022
            </span>
          </div>
        </div>
        <div className="sideCols">
          <div className="sideCol1">
            <div className="courseImageSide">
              <img
                src="https://images.pexels.com/photos/2239422/pexels-photo-2239422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="courseImg2"
              ></img>
            </div>
            <h2
              style={{
                padding: "20px",
                "font-weight": "bold",
                "font-size": "30px",
              }}
            >
              Free
            </h2>
            <div className="enrollButton">
              <Button className="enrollbtn">ENROLL NOW</Button>
              <span style={{ "padding-top": "20px" }}>
                Free access this course
              </span>
            </div>
            <div className="instructorDiv">
              <div
                className="instructor"
                style={{
                  "padding-left": "20px",
                  "padding-bottom": "20px",
                  "padding-top": "20px",
                }}
              >
                <FaAddressBook />
                <span>
                  <b>Instructor:</b> Rmclingo
                </span>
              </div>
              <div
                className="lesson"
                style={{
                  "padding-left": "20px",
                  "padding-bottom": "20px",
                }}
              >
                <FaBookOpen />
                <span>
                  <b>Lessons:</b> 1
                </span>
              </div>
            </div>
            <div className="shareButton">
              <Button className="shareBtn">SHARE THIS COURE</Button>
            </div>
          </div>
          <div className="sideCol2">
            <h4 className="reqTitle">Material Includes</h4>
            <div className="materialsContent" style={{ padding: "10px" }}>
              <ul>
                <li>Some HTML is needed for this course</li>
                <li>Some JavaScript Skill</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomElementsLang">
        <div className="tabElements">
          <Tabs>
            <TabList>
              <Tab style={{ padding: "20px" }}>
                <FaBookmark />
                <span style={{ "padding-left": "5px" }}>Overview</span>
              </Tab>
              <Tab style={{ padding: "20px" }}>
                <FaBookOpen />
                <span style={{ "padding-left": "5px" }}>Curriculum</span>
              </Tab>
              <Tab style={{ padding: "20px" }}>
                <FaAddressBook />
                <span style={{ "padding-left": "5px" }}>Instructor</span>
              </Tab>
              <Tab style={{ padding: "20px" }}>
                <FaStar />
                <span style={{ "padding-left": "5px" }}>Reviews</span>
              </Tab>
            </TabList>

            <TabPanel
              style={{ "margin-bottom": "30px", backgroundColor: "aliceblue" }}
            >
              <div className="aboutCourseContent">
                <h2>About the course</h2>
                <p>
                  Conveniently build adaptive users with front-end human
                  capital. Appropriately unleash team building technology for
                  goal-oriented paradigms. Dynamically generate interoperable
                  e-business vis-a-visgoal-oriented value. Completely pursue
                  fully tested content whereas multifunctional core
                  competencies. Progressively scale team driven process
                  improvements before premier functionalities. Holisticly
                  cultivate intermandated methodologies rather than virtual
                  technology. Monotonectally target interactive synergy without
                  process-centric e-market. Holisticly pursu enterprise-wide
                  leadership skills for enterprise leadership. Collaboratively
                  underwhelm standardized expertise after effective bandwidth.
                </p>
                <p>
                  Enthusiastically aggregate ethical systems for standardized
                  mindshare. Energistically target resource maximizing
                  leadership skills without backward-compatible action items.
                  Credibly impact alternative expertise vis-a-vis economically
                  sound results. Dynamically synergize empowered benefits
                  through functional partnerships. Authoritatively empower
                  prospective infomediaries for interactive content.
                  Synergistically embrace 2.0 paradigms through professional
                  intellectual capital. Interactively strategize parallel growth
                  strategies without out-of-the-box web services.
                </p>
                <h2>What Will You Learn?</h2>
                <p>
                  I take my courses very seriously but at the same time I try to
                  make it fun since I know how difficult learning from an
                  instructor with a monotone voice or boring attitude is. This
                  course is fun, and when you need some energy to keep going,
                  you will get it from me.
                </p>
                <p>
                  Practice, practice and more practice. Every section inside
                  this course has a practice lecture at the end, reinforcing
                  everything with went over in the lectures. I also created a
                  small application the you will be able to download to help you
                  practice PHP. To top it off, we will build and awesome CMS
                  like WordPress, Joomla or Drupal.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div>Curriculum tab content goes here</div>
            </TabPanel>
            <TabPanel>
              <div>Instructors tab content goes here</div>
            </TabPanel>
            <TabPanel>
              <div>Reviews tab content goes here</div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="reqCol">
          <h4 className="reqTitle">Requirements</h4>
          <div className="reqContent" style={{ padding: "10px" }}>
            <ul>
              <li>Some HTML is needed for this course</li>
              <li>Some JavaScript Skill</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
