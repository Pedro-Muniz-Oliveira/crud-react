import React from "react";
import "./cards.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <h1 className="card-title">{props.nome}</h1>
      <p className="card-cost">{props.cost}</p>
    </div>
  );
}