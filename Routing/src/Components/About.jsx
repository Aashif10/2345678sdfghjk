import React from "react";
import image from "../assets/hq.jpg";
const About = () => {
  return (
    <div id="about">
      <img src={image} id=" image1" alt="Programming" />
      <h1>About Me</h1>
      <p>
        Determined and knowledgeable software developer who can think outside
        the box Newly graduated professional with software development project
        experience. Focused results-driven and knowledgeable in multiple
        computer languages. Seeking an opportunity to enhance various software
        packages.
      </p>
      <div id="content">
        <h3>Skills</h3>
        <div id="one">
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>Express</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>MongoDB</li>
              <li>Git&GitHub</li>
              <li>Reast API</li>
            </ul>
          </div>
        </div>
        <h3 id="ex">Exprience</h3>
        <h5>2023</h5>
        <h6>Travel and tourism Management</h6>
        <h5>2024</h5>
        <h6>Tranning completed from Qspider Noida</h6>
        <h3 id="edu">Education</h3>
        <h6>Master Computer Application from Greater Noida</h6>
      </div>
    </div>
  );
};

export default About;
