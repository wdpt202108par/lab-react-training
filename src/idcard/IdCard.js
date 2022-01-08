import React from 'react';
import "./IdCard.css";


function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt={props.firstName + " " + props.lastName} />
      <ul>
        <li>
          <p><b>First Name:</b> {props.firstName}</p>
        </li>
        <li>
          <p><b>Last Name:</b> {props.lastName}</p>
        </li>
        <li>
          <p><b>Gender:</b> {props.gender}</p>
        </li>
        <li>
          <p><b>Height:</b> {props.height / 100} m</p>
        </li>
        <li>
          <p><b>Birth:</b> {props.firstName}</p>
        </li>
      </ul>
    </div>
  );
}


export default IdCard;