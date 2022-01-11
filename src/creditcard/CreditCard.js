import React from "react";
import { formatDate } from "../Helpers";
import "./CreditCard.css";


function CreditCard(props) {
  const divStyle = {
    background: `${props.bgColor}`
  }

  return (
    <div className="CreditCard" style={divStyle}>
      <div id="card-type">{props.type}</div>
      <div id="card-num">•••• •••• •••• {props.number.slice(12)}</div>
      <div className="card-info">
        <div>Expires {formatDate(props.expirationMonth, props.expirationYear)}</div>
        <div>{props.bank}</div>
      </div>
      <div className="card-info">{props.owner}</div>
    </div>
  );
}


export default CreditCard;