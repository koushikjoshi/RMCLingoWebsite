import React from "react";
import "./Training.css";
import { TrainingBody } from "./TrainingBody";

export const TrainingHero = () => {
  return (
    <>
      <div className="container-fluid" id="training">
        <h1 className="Title">Training</h1>
      </div>
      <TrainingBody/>
    </>
  );
};
