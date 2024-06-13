import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import myImage from "../assets/Logo.png";
import "../App.css";
const Landing = () => {
  return (
    <div>
      <nav id="navbar">
        <div>
          <img src={myImage} alt="" />
        </div>
        <div>
          <Link to={"/"} />
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/service"}>Service</Link>
          <Link to={"/contact"}>Contact</Link>
          {/* <Link to={"/help"}> Help </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Landing;
