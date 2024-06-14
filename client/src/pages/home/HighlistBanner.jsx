import React from "react";
import "./HighlightBanner.css";
import { Link } from "react-router-dom";
const HighlightBanner = () => {
  return (
    <div className="highlight-banner bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-10 px-5 rounded-lg shadow-lg text-center">
      <h2 className=" font-extrabold mb-4">
        Dealer & Sub-Dealer Requirements in West Bengal
      </h2>
      <p className="lg:text-2xl font-semibold mb-4">
        Covering All Districts!
      </p>
      <p className="text-xl mb-4">
        Your Investment Just Doubled!
      </p>
      <p className="text-lg mb-8">
        Join us and expand your business with Wroley Electric Scooters.
      </p>
    <Link to="/contact">
    <button className="bg-yellow-400 hover:bg-yellow-500 text-xl font-bold py-3 px-8 rounded-full transition duration-300">
        Learn More
      </button>
    </Link>
    </div>
  );
};

export default HighlightBanner;
