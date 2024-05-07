import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58685.103510536996!2d77.4144!3d23.176806399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714990557779!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <br />
      <br />
      <br />
      <br />

      <div className="contact main-container">
        <div className="first">
          <h1>Wroley Electric Scooter</h1>
          <p>Get in Touch with Wroley: Your Electric Scooter Solution</p>
          <div className="icons">
            <div className="icon">
              <FaLocationDot />
            </div>
            <span>
              L-2/103 S/F office Mahavir Nagar Extension, New Delhi, 110018
            </span>
          </div>
          <div className="icons">
            <div className="icon">
              <MdEmail />
            </div>
            <span>
              L-2/103 S/F office Mahavir Nagar Extension, New Delhi, 110018
            </span>
          </div>
          <div className="icons">
            <div className="icon">
              <FaPhone />
            </div>
            <span>
              L-2/103 S/F office Mahavir Nagar Extension, New Delhi, 110018
            </span>
          </div>
        </div>
        <div className="second">
          <h2>Contact With Us!</h2>
          <form className="form">
            <div className="child">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="test" placeholder="Phone Number" />
            <textarea name="" id="" placeholder="Write your message"></textarea>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Contact;
