import React, { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

import "./scroll-to-top.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      //   className={`scroll-to-top ${isVisible ? "show" : ""}`}
      className={`scrollup ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      id="scroll-to-up"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
