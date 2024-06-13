import React from "react";
import { FaCode } from "react-icons/fa";
import { SiBackendless } from "react-icons/si";
import { FaAppStore } from "react-icons/fa";

import "../App.css";
const Service = () => {
  return (
    <div>
      <div id="service">
        <h1>My Services</h1>
        <div id="div1">
          <FaCode
            style={{ color: "white", fontSize: "80px", marginLeft: "25px" }}
          />
          <h2>Web Development</h2>
          <p>
            Web development, also known as website development, refers to the
            tasks associated with creating, building, and maintaining websites
            and web applications that run online on a browser. It may, however,
            also include web design, web programming, and database management!
          </p>
        </div>
        <div id="div2">
          <SiBackendless
            style={{ color: "white", fontSize: "80px", marginLeft: "25px" }}
          />

          <h2>Backend Development</h2>
          <p>
            To design effective and efficient solutions, i must first gain a
            thorough grasp of the website's performance demands and goals and
            Organize the system logic !
          </p>
        </div>
        <div id="div3">
          <FaAppStore
            style={{
              color: "white",
              fontSize: "55px",
              marginLeft: "25px",
              marginTop: "10px"
            }}
          />

          <h2>Api Design</h2>
          <p>
            Application Programming Interfaces (APIs) development and
            administration Identify the Resources – Object Modeling. The first
            step in designing a REST API-based application is identifying the
            objects that will be presented as resources and Assigning HTTP
            Methods!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
