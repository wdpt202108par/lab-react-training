import React from 'react';
import './Idcard.css';

function Idcard(props) {
  return (
    <div>
      <p>Last Name: {props.lastName}</p>
      <p>First Name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}m</p>
      <p>Birth: {props.birth.toDateString()}</p>
      <img src={props.picture} />
    </div>
  );
}

export default Idcard;
