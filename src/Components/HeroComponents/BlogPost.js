import React from "react";
import { BsBook, BsClock, BsPerson } from "react-icons/bs";
import "./Blogpost.css";

export const BlogPost = () => {
  return (
    <div className="container-fluid" id="blogpost">
      <div className="container heading">
        <h6 className="ourblog">
          <i>
            <BsBook />
          </i>
          Our Blog Post
        </h6>
        <h3 className="news">Latest News Update</h3>
      </div>

      <div className="container card-section">
        <div className="row blog-cards">
          <div className="col-sm-4 blog-card">
            <div className="cardimg">
              <img
                src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/blog-s-1-3-6-444x323.jpg"
                className="imgblog"
              />
            </div>
            <div className="titlecard">
              <h6>Benefits of Learning The Spanish Language</h6>
            </div>
            <div className="dateandauthor">
              <div className="date">
                <i>
                  <BsClock /> 03 Aug 2022
                </i>
              </div>
              <div className="author">
                <i>
                  <BsPerson />
                  By rmclingo
                </i>
              </div>
            </div>
            <div className="readmore">
              <p>Read More</p>
            </div>
          </div>
          <div className="col-sm-4 blog-card">
            <div className="cardimg">
              <img
                src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/blog-s-1-3-6-444x323.jpg"
                className="imgblog"
              />
            </div>
            <div className="titlecard">
              <h6>Benefits of Learning The Spanish Language</h6>
            </div>
            <div className="dateandauthor">
              <div className="date">
                <i>
                  <BsClock /> 03 Aug 2022
                </i>
              </div>
              <div className="author">
                <i>
                  <BsPerson />
                  By rmclingo
                </i>
              </div>
            </div>
            <div className="readmore">
              <p>Read More</p>
            </div>
          </div>
          <div className="col-sm-4 blog-card">
            <div className="cardimg">
              <img
                src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/08/blog-s-1-3-6-444x323.jpg"
                className="imgblog"
              />
            </div>
            <div className="titlecard">
              <h6>Benefits of Learning The Spanish Language</h6>
            </div>
            <div className="dateandauthor">
              <div className="date">
                <i>
                  <BsClock /> 03 Aug 2022
                </i>
              </div>
              <div className="author">
                <i>
                  <BsPerson />
                  By rmclingo
                </i>
              </div>
            </div>
            <div className="readmore">
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
