import React from "react";
import "./BoxColor.css";
import { rgbToHex } from "../Helpers";


function BoxColor(props) {
  const divStyle = {
    background: `rgb(${props.r}, ${props.g}, ${props.b})`
  }
  return (
    <div className="BoxColor" style={divStyle}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
}

export default BoxColor;