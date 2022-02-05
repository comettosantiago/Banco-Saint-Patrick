import React from "react";
import "../styles/HamburgerButton.css";

const HamburgerButton = ({ clicked, handleClick }) => {
  return (
    <>
      <section
        className={`icon nav-icon ${clicked ? "open" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </section>
    </>
  );
};

export { HamburgerButton };
