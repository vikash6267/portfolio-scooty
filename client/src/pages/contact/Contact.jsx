import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import "./contact.css";
import { contactUsForm } from "../../services/operations/admin";
import Footer from "../../components/footer/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    message: "",
    contact: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("firstname", formData.firstname);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("contact", formData.contact);
    contactUsForm(formDataToSend);
    setFormData({
      email: "",
      firstname: "",
      message: "",
      contact: "",
    });
  };

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
          <div className="icons flex items-start">
            <div class="p-4 border  w-fit">
              <p class="font-semibold text-lg text-gray-800">Address:</p>
              <p class="text-gray-700">
                <span class="font-medium">Floor No.:</span> 3RD FLOOR
              </p>
              <p class="text-gray-700">
                <span class="font-medium">Building No./Flat No.:</span> SHOP NO
                316, PLOT NO 5
              </p>
              <p class="text-gray-700">
                <span class="font-medium">Name Of Premises/Building:</span> DDA
                COMMUNITY CENTER RG COMPLEX 2, RG COMPLEX
              </p>
              <p class="text-gray-700">
                <span class="font-medium">Road/Street:</span> SECTOR-14
              </p>
              <p class="text-gray-700">
                <span class="font-medium">Nearby Landmark:</span> NEAR BABUSA
                ROHINI
              </p>
              <p class="text-gray-700">
                <span class="font-medium">City/Town/Village:</span> New Delhi
              </p>
              <p class="text-gray-700">
                <span class="font-medium">District:</span> North Delhi
              </p>
              <p class="text-gray-700">
                <span class="font-medium">State:</span> Delhi
              </p>
              <p class="text-gray-700">
                <span class="font-medium">PIN Code:</span> 110085
              </p>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <MdEmail />
            </div>
            <span>info@wroleyelectricscooter.com</span>
          </div>
          <div className="icons">
            <div className="icon">
              <FaPhone />
            </div>
            <span>9891780956</span>
          </div>
        </div>
        <div className="second">
          <h2>Contact With Us!</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="child">
              <input
                type="text"
                placeholder="Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleOnChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
              />
            </div>
            <input
              type="test"
              placeholder="Phone Number"
              name="contact"
              value={formData.contact}
              onChange={handleOnChange}
            />
            <textarea
              id=""
              placeholder="Write your message"
              name="message"
              value={formData.message}
              onChange={handleOnChange}
            ></textarea>
            <button className="btn-grad flex ">Contact US</button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Contact;
