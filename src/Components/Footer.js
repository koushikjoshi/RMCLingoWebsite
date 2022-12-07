import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

export function Footer() {
  return (
    <div className="container-fluid" id="footer">
      <footer className="py-5 my-3 mb-0">
        <div className="row">
          <div className="col-6 col-md-4 mb-3 mr-5">
            <h5 className="logonamefooter">RMCLingo</h5>
            <img
              src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/lingo-300x125.png"
              className="logofooter"
            />
            <p>
              RMC Lingo is tending to be a pioneer in the field of foreign
              language and is keen to be a trailblazer for foreign language
              learners. We at RMC Lingo are enthusiastic about offering many
              foreign languages.
            </p>
          </div>

          <div className="col-6 col-md-4 mb-3 ml-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3">
            <div className="Address">
              <h5>Our Address</h5>
              <p>313, 3 rd Floor, Style Living Mall,</p>
              <p>Jasola, New Delhi - 110025</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <BsTwitter />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  <BsInstagram />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
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
