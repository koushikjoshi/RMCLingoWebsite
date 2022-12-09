import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <div className="container-fluid" id="footer">
      <footer className="py-5 my-3 mb-0">
        <div className="container-fluid row">
          <div className="col-6 col-md-4 mb-3 mr-5 ">
            <h5 className="logonamefooter">RMCLingo</h5>
            <img
              src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/lingo-300x125.png"
              className="logofooter d-none d-sm-block"
            />
            <p>
              RMC Lingo is tending to be a pioneer in the field of foreign
              language and is keen to be a trailblazer for foreign language
              learners. We at RMC Lingo are enthusiastic about offering many
              foreign languages.
            </p>
          </div>

          <div className=" col-6 col-md-4 mb-3 ml-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/About" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Germany" className="nav-link p-0 text-muted">
                  Languages
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Training" className="nav-link p-0 text-muted">
                  Training
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Contact" className="nav-link p-0 text-muted">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3 ">
            <div className="container   Address">
              <h5>Our Address</h5>
              <p>313, 3 rd Floor, Style Living Mall,</p>
              <p>Jasola, New Delhi - 110025</p>
            </div>
          
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1115882104164!2d77.61331931478543!3d12.964710790860423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15dd2c066697%3A0xdfe5d9795fde5711!2sRmc%20Educational%20service%20center!5e0!3m2!1sen!2sin!4v1670500137238!5m2!1sen!2sin"
                width="auto"
                height="auto"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2022 RMC, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-light" href="#">
                <svg className="bi" width="24" height="24">
                  <BsTwitter />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href="#">
                <svg className="bi" width="24" height="24">
                  <BsInstagram />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href="#">
                <svg className="bi" width="24" height="24">
                  <FaFacebook />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
