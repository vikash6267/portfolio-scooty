import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scroll.css";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisibility);

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Scroll;
