import React, { useState } from "react";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdownDivider,
} from "@coreui/bootstrap-react";

import {
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaPlusCircle,
  FaFacebookF,
  FaAngleRight,
  FaBars,
  FaTwitter,
  FaInstagram,
  FaBook,
  FaPinterestP,
} from "react-icons/fa";

export const Navbar = () => {
  // Define state variables to control whether the dropdowns are visible
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  // Define event handlers to show the dropdowns when the corresponding elements are clicked
  const handleAboutUsClick = () => {
    setShowAboutUsDropdown(!showAboutUsDropdown);
  };
  const handleCoursesClick = () => {
    setShowCoursesDropdown(!showCoursesDropdown);
  };

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleClose = () => setShowOffCanvas(false);
  const handleShow = () => setShowOffCanvas(true);

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(!show2);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };

  const [show3, setShow3] = useState(false);
  const showDropdown3 = (e) => {
    setShow3(!show3);
  };
  const hideDropdown3 = (e) => {
    setShow3(false);
  };
  return (
    <div className="fullNav">
      <div className="topNav">
        <div className="contactStuff">
          <div className="phone">
            <FaPhone />
            <span>+91 9810770128</span>
          </div>
          <div className="email">
            <FaEnvelope />
            <span>info@rmclingo.com</span>
          </div>
          <div className="address">
            <FaLocationArrow />
            <span>
              313, 3 rd Floor, Style Living Mall, Jasola, New Delhi - 110025
            </span>
          </div>
        </div>
        <div className="smStuff">
          <div className="facebook">
            <FaFacebookF />
          </div>
          <div className="twitter">
            <FaTwitter />
          </div>
          <div className="instagram">
            <FaInstagram />
          </div>
          <div className="pinterest">
            <FaPinterestP />
          </div>
        </div>
      </div>
      <div className="secondNav">
        <div className="logo">
          <img src={require("../Assets/lingo.png")} className="lingoLogo" />
        </div>
        <div className="links">
          <div className="home">
            <span>
              {" "}
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </span>
          </div>
          <div className="aboutUs">
            <Dropdown
              className="no-underline dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <Link to="/About" style={{ color: "white" }}>
                  {" "}
                  About Us{" "}
                </Link>
              </Dropdown.Toggle>
              <CSSTransition
                in={show}
                timeout={300}
                classNames="slide"
                unmountOnExit
              >
                <Dropdown.Menu className="dropDownMenu">
                  <Dropdown.Item>
                    <Link to="/Director">
                      <FaBook /> Director's Message
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </CSSTransition>
            </Dropdown>
          </div>
          <div className="aboutUs">
            <CDropdown
              className="no-underline dropdown"
              visible={show2}
              onMouseEnter={showDropdown2}
              onMouseLeave={hideDropdown2}
            >
              <CDropdownToggle variant="link" id="dropdown-basic">
                <Link to="/" style={{ color: "white" }}>
                  Courses
                </Link>
              </CDropdownToggle>
              <CSSTransition
                in={show2}
                timeout={300}
                classNames="slide"
                unmountOnExit
              >
                <CDropdownMenu className="dropDownMenu">
                  <CDropdownItem>
                    <Link to="/Germany">
                      <FaBook /> German Language
                    </Link>
                  </CDropdownItem>
                  <CDropdownItem>
                    <Link to="/French">
                      {" "}
                      <FaBook /> French Language{" "}
                    </Link>
                  </CDropdownItem>
                  <CDropdownItem>
                    <Link to="/Spanish">
                      <FaBook /> Spanish Language
                    </Link>
                  </CDropdownItem>
                  <CDropdownItem>
                    <CDropdown
                      className="dropDownMenu"
                      variant="nav-item"
                      color="black"
                      direction="dropend"
                      visible={show3}
                      timeout={300}
                      onMouseEnter={showDropdown3}
                      onMouseLeave={hideDropdown3}
                    >
                      <CDropdownToggle id="dropdown-basic dropdown3">
                        <FaBook style={{ color: "black" }} />
                        <span style={{ color: "black" }} className="otherLang">
                          {" "}
                          Other Languages
                        </span>
                      </CDropdownToggle>
                      <CSSTransition
                        in={show3}
                        timeout={300}
                        classNames="slide2"
                        unmountOnExit
                      >
                        <CDropdownMenu className="dropdownMenu3">
                          <CDropdownItem href="#">
                            <Link to="/Japanese">
                              <FaBook /> Japanese Language
                            </Link>
                          </CDropdownItem>
                          <CDropdownItem href="#">
                            <Link to="/Russian">
                              <FaBook /> Russian Language
                            </Link>
                          </CDropdownItem>
                          <CDropdownItem href="#">
                            <Link to="/Arabic">
                              <FaBook /> Arabic Language
                            </Link>
                          </CDropdownItem>
                          <CDropdownItem href="#">
                            <Link to="/Korean">
                              <FaBook /> Korean Language
                            </Link>
                          </CDropdownItem>
                          <CDropdownItem href="#">
                            <Link to="English">
                              <FaBook /> English Language
                            </Link>
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CSSTransition>
                    </CDropdown>
                  </CDropdownItem>
                </CDropdownMenu>
              </CSSTransition>
            </CDropdown>
          </div>
          <div className="training">
            <span>
              <Link to="/Training" style={{ color: "white" }}>
                Training
              </Link>
            </span>
          </div>
          <div className="blog" style={{ color: "white" }}>
            <span>
              <Link to="/Blog" style={{ color: "white" }}>
                Blog
              </Link>
            </span>
          </div>
          <div className="contactUs">
            <span>
              <Link to="/Contact" style={{ color: "white" }}>
                Contact
              </Link>
            </span>
          </div>
        </div>
        <div className="menuIcon">
          <FaBars size={35} color="white" onClick={handleShow} />
          <Offcanvas show={showOffCanvas} onHide={handleClose}>
            <Offcanvas.Header
              closeButton
              className="closeButton"
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <div className="offCanvasLogo">
                <img
                  src={require("../Assets/lingo.png")}
                  className="offCanvasLogoImg"
                />
              </div>
              <div className="textOff">
                <div className="homeOff">
                  <FaAngleRight color="black" />
                  <span>Home</span>
                </div>
                <div className="AboutUsOff" onClick={handleAboutUsClick}>
                  <FaAngleRight color="black" />
                  <span>About Us</span>

                  {showAboutUsDropdown && (
                    <Dropdown id="dropdown-basic">
                      <Dropdown.Item
                        href="#/action-1"
                        className="offCanvasAbout"
                      >
                        <FaAngleRight />
                        <Link to="/Director">Director's Message</Link>
                      </Dropdown.Item>
                    </Dropdown>
                  )}
                </div>
                <div className="CoursesOff" onClick={handleCoursesClick}>
                  <FaAngleRight color="black" />
                  <span>Courses</span>
                  {showCoursesDropdown && (
                    <Dropdown className="languageDropdownOff">
                      <Dropdown.Item href="#/action-1">
                        <FaAngleRight /> <b>German Language</b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <FaAngleRight /> <b>French Language</b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <FaAngleRight /> <b>Spanish Language</b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">
                        <FaAngleRight /> <b>Japanese Language</b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <FaAngleRight /> <b>Arabic Language</b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <FaAngleRight /> <b>Russian Language</b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <FaAngleRight /> <b>Korean Language</b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <FaAngleRight /> <b>English Language</b>
                      </Dropdown.Item>
                    </Dropdown>
                  )}
                </div>
                <div className="TrainingOff">
                  <FaAngleRight color="black" />
                  <span>Training</span>
                </div>
                <div className="BlogOff">
                  <FaAngleRight color="black" />
                  <span>Blog</span>
                </div>
                <div className="ContactUsOff">
                  <FaAngleRight color="black" />
                  <span>Contact Us</span>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
};
