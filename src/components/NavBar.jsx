import React, { useState } from "react";
import { HamburgerButton } from "./HamburgerButton.jsx";
import { NavOptions } from "./NavOptions.jsx";
import "../styles/NavBar.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <section className="nav-container">
        <HamburgerButton clicked={clicked} handleClick={handleClick} />
        <section>
          <i className="fa fa-user"></i>
        </section>
      </section>

      <NavOptions clicked={clicked} />
    </>
  );
};

export { NavBar };
