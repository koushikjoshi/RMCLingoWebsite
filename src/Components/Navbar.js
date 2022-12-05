import React from "react";
import "./Navbar.css"

export const Navbar = () => {
  return (
 
    <nav class="navbar navbar-expand-lg bg-light " id="mainnavbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/09/lingo.png" className="logo" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
       
      
    </div>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav px-5 mx-5 mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Training</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          </ul>
      </div>
  </nav>
   
  );
};
