import React from "react";
import "../styles/NavOptions.css";

const initialState = [
  {
    name: "Transferir dinero",
    status: "activeNav",
    link: "/transfer",
  },
  {
    name: "Pagar servicios",
    status: "disabledNav",
    link: "#",
  },
  {
    name: "Pagar créditos y trajetas",
    status: "disabledNav",
    link: "#",
  },
];

const NavOptions = ({ clicked }) => {
  return (
    <>
      <section className="navOptions-container">
        {initialState.map((elem, index) => {
          return (
            <section
              key={index}
              className={`navItem-container ${clicked ? "activation" : ""}`}
            >
              <a href={elem.link} className={elem.status}>
                {elem.name}
              </a>
            </section>
          );
        })}
      </section>
    </>
  );
};

export { NavOptions };
