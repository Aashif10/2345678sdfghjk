import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

import "../App.css";
const Contact = () => {
  return (
    <div id="contact">
      <div id="detail">
        <h1>Contact Me</h1>
        <TfiEmail
          style={{ color: "crimson", fontSize: "30px ", marginTop: "15px" }}
        />

        <h3>aashif6004@gmail.com</h3>
        <LuPhoneCall id="call" />
        <h4>+91-7417573741</h4>
      </div>
      <div id="icons">
        <a href="https://www.linkedin.com/in/aashif-web-developer/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aashif10">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/aashif_alii/">
          <FaInstagram />
        </a>
        <a href="https://x.com/Aashi56484849">
          <TiSocialTwitter />
        </a>
      </div>
      <div id="form">
        <form action="#">
          <input type="text" placeholder="Your Name" name="username" />
          <br />
          <br />
          <input type="email" placeholder="Your Email" name="email" />
          <br />
          <br />
          <textarea name="none" id="none" placeholder="Your Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer id="end">
        <h4>Copyright © by Aashif ❤️</h4>
      </footer>
    </div>
  );
};

export default Contact;
