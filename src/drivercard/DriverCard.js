import React from "react";
import { displayStars } from "../Helpers";
import "./DriverCard.css";


function DriverCard(props) {
  return (
    <div className="DriverCard">
      <img id="driver-img" src={props.img} alt={props.name} />
      <div id="driver-info">
        <h2>{props.name}</h2>
        <div>{ displayStars(props.rating) }</div>
        <h3>{props.car.model} - {props.car.licensePlate}</h3>
      </div>
    </div>
  );
}


export default DriverCard;