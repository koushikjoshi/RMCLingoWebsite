import React from "react";
import "../Components/BlogComponents/Blog.css";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Organisms/Footer";

export const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid" id="blogpage">
        <div className="container emptypage">BLOG</div>
      </div>
      <div className="emptypage">
        <img
          src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/abstract-coming-soon-halftone-style-background-design_1017-27282-1024x682.webp"
          className="comingsoonimg"
        />
      </div>
      <Footer />
    </>
  );
};
