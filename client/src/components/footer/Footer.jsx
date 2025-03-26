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
            <p>
              24/7 available number <br /> +91 9891780956
            </p>
          </div>
          <div className="second">
            <h3>Quick Links</h3>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About Us
            </Link>
            <Link className="link" to="/service">
              Services
            </Link>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
            <Link className="link" to="/admin/login">
              Admin Login
            </Link>
          </div>
          <div className="third">
            <h3>Head Office</h3>
            <div class="p-4  w-fit">
              <p class="font-semibold text-lg text-white">Address:</p>
              <p class="text-white">
                <span class="font-medium">Floor No.:</span> 3RD FLOOR
              </p>
              <p class="text-white">
                <span class="font-medium">Building No./Flat No.:</span> SHOP NO
                316, PLOT NO 5
              </p>
              <p class="text-white">
                <span class="font-medium">Name Of Premises/Building:</span> DDA
                COMMUNITY CENTER RG COMPLEX 2, RG COMPLEX
              </p>
              <p class="text-white">
                <span class="font-medium">Road/Street:</span> SECTOR-14
              </p>
              <p class="text-white">
                <span class="font-medium">Nearby Landmark:</span> NEAR BABUSA
                ROHINI
              </p>
              <p class="text-white">
                <span class="font-medium">City/Town/Village:</span> New Delhi
              </p>
              <p class="text-white">
                <span class="font-medium">District:</span> North Delhi
              </p>
              <p class="text-white">
                <span class="font-medium">State:</span> Delhi
              </p>
              <p class="text-white">
                <span class="font-medium">PIN Code:</span> 110085
              </p>
            </div>

            <span>EMAIL US:</span>
            <a href="mailto:info@wroleyelectricscooter.com">
              info@wroleyelectricscooter.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
