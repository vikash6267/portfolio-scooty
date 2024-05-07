import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src="https://wroleyelectricscooter.in/assets/images/logo.png"
          alt="not found"
        />
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
        <Slide direction="down">
          <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/services">
                Our Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </Slide>
      </div>
    </nav>
  );
};

export default Navbar;
