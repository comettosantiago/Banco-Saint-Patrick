import React from "react";
import Logo from "../components/Logo";
import img1 from "../assets/images/cardStart.png";
import img2 from "../assets/images/transac.png";
import InformativeScreens from "../components/InformativeScreens";

const initialState = [
  {
    id: 1,
    title: "Accede fácil",
    content:
      "Ingresa en cuestión de segundos a nuestra plataforma online y descubre todos los beneficios",
    img: img1,
  },
  {
    id: 2,
    title: "Transfiere",
    content:
      "Realiza operaciones en cuestión de minutos desde la comodidad de donde estes y con total seguridad",
    img: img2,
  },
];

const Start = () => {
  return (
    <section
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <section className="carousel-inner">
        <section className="carousel-item active">
          <InformativeScreens info={initialState[0]} />
        </section>

        <section className="carousel-item">
          <InformativeScreens info={initialState[1]} />
        </section>

        <section className="carousel-item">
          <Logo />
        </section>
      </section>

      <section className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </section>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Start;
