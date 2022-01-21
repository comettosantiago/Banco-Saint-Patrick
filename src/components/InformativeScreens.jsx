import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/images/cardStart.png";
import pic2 from "../assets/images/transac.png";
import logo from "../assets/images/logoHomebanking.png";
//import Button from "./Button.jsx";

const InformativeScreens = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <div className="containerStart">
              <div className="containerStart-image">
                <img
                  src={pic1}
                  className="d-block w-100 pic1Start"
                  alt="..."
                ></img>
              </div>

              <div className="containerStart-content">
                <h5 className="title-Start">Accede fácil</h5>
                <p className="text-Start">
                  Ingresa en cuestión de segundos a nuestra plataforma online y
                  descubre todos los beneficios.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="containerStart">
              <div className="containerStart-image">
                <img
                  src={pic2}
                  className="d-block w-100 pic2Start"
                  alt="..."
                ></img>
              </div>

              <div className="containerStart-content">
                <h2 className="title-Start">Transfiere</h2>
                <p className="text-Start">
                  Realiza operaciones en cuestión de minutos desde la comodidad
                  de donde estes y con total seguridad.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="containerStart-image containerStart-image-desktop">
              <img src={logo} className="d-block logoStart" alt="..."></img>
            </div>

            <h1 className="title-Start-green">BANCO</h1>
            <h1 className="title-Start-yellow">SAINT PATRICK</h1>
            <div className="container-btn-StartBank">
              <Link type="button" className="btn btn-primary" to="/login">
                Empezar
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-indicators">
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
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export { InformativeScreens };
