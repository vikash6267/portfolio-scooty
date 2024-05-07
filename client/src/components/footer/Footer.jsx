import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="footer-img">
        <footer className="footer main-container">
          <div className="first">
            <h3>Working Hours</h3>
            <span>TIMINGS:</span>
            <p>24x7</p>
          </div>
          <div className="second">
            <h3>Quick Links</h3>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About Us
            </Link>
            <Link className="link" to="/services">
              Services
            </Link>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </div>
          <div className="third">
            <h3>Head Office</h3>
            <span>LOCATION:</span>
            <p>L-2/103 S/F office Mahavir Nagar Extension, New Delhi, 110018</p>
            <span>EMAIL US:</span>
            <a href="mailto:info@wroleyelectricscooter.in">
              info@wroleyelectricscooter.in
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
