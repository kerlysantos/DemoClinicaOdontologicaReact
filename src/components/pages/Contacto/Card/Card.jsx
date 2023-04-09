import React from "react";
import "./Card.css";
import { TiMortarBoard } from "react-icons/ti";


const Card = ({ email,  nombre }) => {
  return (
    <div className="respuesta">
      <h2 className="respuesta1"> Hola, {nombre}! </h2>
      <h2 className="respuesta1">
        {" "}
        Has estudiado en la Universidad de {email}. <TiMortarBoard />{" "}
      </h2>
      
    </div>
  );
};

export default Card;
