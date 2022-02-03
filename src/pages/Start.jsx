import React from "react";

import Logo from '../components/Logo';
import img1 from '../assets/images/cardStart.png';
import img2 from '../assets/images/transac.png';
import InformativeScreens from '../components/InformativeScreens';
import TransactionLabel from "../components/TransactionLabel";

const initialState = [
  {
    id: 1,
    title: 'Accede fácil',
    content: 'Ingresa en cuestión de segundos a nuestra plataforma online y descubre todos los beneficios',
    img: img1
  },
  {
    id: 2,
    title: 'Transfiere',
    content: 'Realiza operaciones en cuestión de minutos desde la comodidad de donde estes y con total seguridad',
    img: img2
  }
];

const Start = () => {
  return (
    <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <div className="containerStart">
              <InformativeScreens info={initialState[0]}/>
            </div>
          </div>

          <div className="carousel-item">
            <div className="containerStart">
              <InformativeScreens info={initialState[1]}/>
            </div>
          </div>

          <div className="carousel-item">
            <div className="containerStart-image containerStart-image-desktop">
              <Logo/>
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
        <TransactionLabel order={1} user="Prueba componente movimientos" amount={50}/>
        <TransactionLabel order={2} user="Prueba componente movimientos" amount={50}/>
        <TransactionLabel order={3} user="Prueba componente movimientos" amount={50}/>
        <TransactionLabel order={4} user="Prueba componente movimientos" amount={50}/>
        <TransactionLabel order={5} user="Prueba componente movimientos" amount={50}/>
        <TransactionLabel order={6} user="Prueba componente movimientos" amount={50}/>
        <TransactionLabel order={7} user="Prueba componente movimientos" amount={50}/>
        <TransactionLabel order={8} user="Prueba componente movimientos" amount={50}/>
      </div>
  );
};

export default Start;
