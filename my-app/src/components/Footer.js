import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>JOURNEY</h1>
          <p>Choose Your Favourite Destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-behance"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Projects</h4>
            <a href="/">Changelogo</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Terms Of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
        </div>
      </div>
      <div>
        <p className="">©2022 Journey Private Limited </p>
      </div>
    </div>
  );
};

export default Footer;
