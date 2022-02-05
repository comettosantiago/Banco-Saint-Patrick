import React from "react";

const InformativeScreens = ({ info }) => {
  return (
    <section className="container-info">
      <section className="container-top">
        <img src={info.img} alt={info.title} />
      </section>
      <section className="container-bottom">
        <h2 className="slide-title">{info.title}</h2>
        <p className="slide-content">{info.content}</p>
      </section>
    </section>
  );
};

export default InformativeScreens;
