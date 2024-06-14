import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import "./whatsapp.css";
const Whatsapp = () => {
  const handleClick = () => {
    const phoneNumber = "+919289615376 ";

    const message = encodeURIComponent("Hello! Wroley Scooter");

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.location.href = whatsappLink;
  };

  return (
    <button onClick={handleClick} className="whatsapp">
      <IoLogoWhatsapp size={30} />
    </button>
  );
};

export default Whatsapp;
