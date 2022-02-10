import React from "react";

import CreditCard from "../components/CreditCard";
import { NavBar } from "../components/NavBar.jsx";
import mainImg from "../assets/images/mainImag.png";
import TransactionLabel from "../components/TransactionLabel";

const Main = () => {
  return (
    <>
      <NavBar />

      <section className="">
        <div>
          <div>
            <h2>Hola, <span>Noelis</span></h2>
            <p>¿Que haremos hoy?</p>
          </div>
          <img src={mainImg}/>
        </div>

        <p>Mis tarjetas</p>
        <div>
          <CreditCard/>
        </div>

      </section>

      <section>
        <h2>MOVIMIENTOS</h2>
        <div>
          <TransactionLabel/>
        </div>
      </section>
    </>
  );
};

export default Main;
