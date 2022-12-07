import React from "react";
import "./tabstyles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const English = () => {
  return (
    <>
      <div className="main-s">
        <div className="container">
          <div className="ridge">
            <img
              className="image-one"
              src="https://tigtsoft.com/rmclingo/wp-content/uploads/2019/05/course8-1-6.jpg"
              alt="Image 300px"
            />
            <button className="s-g">German</button>
            <h1 className="G-S">
              <b>Germany Language</b>
            </h1>
            <p className="G-S">29 Sep,2022</p>
          </div>
          <div>
            <div>
              <img
                className="image-two"
                src="https://tigtsoft.com/rmclingo/wp-content/uploads/2019/05/course8-1-6.jpg"
                alt="Image 400px"
              />
              <h1 className="f-s">Free</h1>
              <button className="enroll">ENROLL NOW</button>
              <p className="btm-6">Free access this course</p>
              <h6 className="small-dec">
                <b>Instructor</b>:saikiran j
              </h6>
              <h6 className="small-dec">
                <b> Lesson</b>:4
              </h6>
              <button className="btn-2B">SHARE THIS COURSE</button>
            </div>
            <div className="flex-container">
              <div>
                <h2>
                  <b>Material Includes</b>
                </h2>
                <p className="h6-s">
                  Info about our books and courses materials can be found here.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tabcontent">
          <div>
            <div className="text-style">
              <Tabs defaultIndex={0}>
                <TabList>
                  <Tab>OVERVIEW</Tab>
                  <Tab>CURRICULUM</Tab>
                  <Tab>INSTRUCTORS</Tab>
                  <Tab>REVIEWS</Tab>
                </TabList>
                <TabPanel>
                  <h1>
                    <b>About The Course</b>
                  </h1>
                  <p className="text-justify">
                    Conveniently build adaptive users with front-end human
                    capital. Appropriately unleash team building technology for
                    goal-oriented paradigms. Dynamically generate interoperable
                    e-business vis-a-visgoal-oriented value. Completely pursue
                    fully tested content whereas multifunctional core
                    competencies. Progressively scale team driven process
                    improvements before premier functionalities. Holisticly
                    cultivate intermandated methodologies rather than virtual
                    technology. Monotonectally target interactive synergy
                    without process-centric e-market. Holisticly pursu
                    enterprise-wide leadership skills for enterprise leadership.
                    Collaboratively underwhelm standardized expertise after
                    effective bandwidth.
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
                    intellectual capital. Interactively strategize parallel
                    growth strategies without out-of-the-box web services.
                  </p>
                  <h1>What Will You Learn?</h1>
                  <p>
                    I take my courses very seriously but at the same time I try
                    to make it fun since I know how difficult learning from an
                    instructor with a monotone voice or boring attitude is. This
                    course is fun, and when you need some energy to keep going,
                    you will get it from me.
                  </p>
                  <p>
                    Practice, practice and more practice. Every section inside
                    this course has a practice lecture at the end, reinforcing
                    everything with went over in the lectures. I also created a
                    small application the you will be able to download to help
                    you practice PHP. To top it off, we will build and awesome
                    CMS like WordPress, Joomla or Drupal.
                  </p>
                  <ul></ul>
                  <h2>
                    We offer you a special live experience when learning German
                    online:
                  </h2>
                  <ul>
                    <li>
                      active interaction between you, the teacher and the
                      learning group
                    </li>
                    <li>
                      immediate reaction to grammar and conversation exercises
                      and …
                    </li>
                    <li>
                      to exercises for TestDaF, Goethe or telc German exam
                      preparation.
                    </li>
                    <li>We work with practical online exercises…</li>
                    <li>
                      with personal explanation to consolidate the topics
                      learned.
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <h4>Course Content For German courses at RMC Lingo</h4>
                  <p>A1 German courses at RMC Lingo</p>
                  <p>A2 German courses at RMC Lingo</p>
                  <p>B1 German courses at RMC Lingo</p>
                  <p>B2 German courses at RMC Lingo</p>
                </TabPanel>
                <TabPanel>
                  <h2></h2>
                </TabPanel>
                <TabPanel>
                  <h2></h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="App">
            <table>
              <thead>
                <tr>
                  <th>Course Duration</th>
                  <th>Available class times (#Offline)</th>
                  <th>Available class times (#Online)</th>
                  <th>Units per week</th>
                  <th>Number of participants</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    January till November 4 weeks, from Monday to Thursday
                  </td>
                  <td>
                    8.45 am – 11.45 am 12 pm – 03 pm 03 pm – 06 pm 06 pm – 09 pm
                  </td>
                  <td>
                    09 am – 11 am 12 pm – 02 pm 03 pm – 05 pm 06 pm – 08 pm
                  </td>
                  <td>
                    16 TU (4 × 45 minutes a day), 20TU teaching units possible
                    by course combination at an extra charge
                  </td>
                  <td>5-12 participants</td>
                </tr>
                <tr>
                  <td>December 2022 3 weeks, from Monday to Friday</td>
                  <td>
                    28.45 am – 11.45 am 12 pm – 03 pm 03 pm – 06 pm 06 pm – 09
                    pm
                  </td>
                  <td>
                    09 am – 11 am 12 pm – 02 pm 03 pm – 05 pm 06 pm – 08 pm
                  </td>
                  <td>
                    11TU (2 x 60 minutes a day) 13 TU teaching units possible by
                    course combination at an extra charge
                  </td>
                  <td>max. 10 participants</td>
                </tr>
              </tbody>
            </table>
            <div className="last-text">
              <h1>What Will You Learn?</h1>
              <p>The German class will include</p>
              <p>Conversation</p>
              <p>Grammar</p>
              <p>Vocabulary</p>
              <p>Listening</p>
              <p>Writing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
