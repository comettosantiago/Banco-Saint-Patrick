import React from "react";

import "../styles/MainPage.css";
import CreditCard from "../components/CreditCard";
import { NavBar } from "../components/NavBar.jsx";
import mainImg from "../assets/images/mainImag.png";
import TransactionLabel from "../components/TransactionLabel";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <section className="main-user-data-container">
          <div className="user-data-container">
            <div>
              <h2>Hola, <span className="user-name">Noelis</span></h2>
              <p className="welcome-text">¿Que haremos hoy?</p>
            </div>
            <img className="main-img" src={mainImg} alt="main img"/>
          </div>

          <p className="cards-title-text">Mis tarjetas</p>
          <div className="cards-list-container">
            <CreditCard/>
          </div>
        </section>

        <section className="main-data-container">
          <h2 className="movements-title-text">MOVIMIENTOS</h2>
          <div className="movements-container">
            <TransactionLabel/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
