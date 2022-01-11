import React from "react";
import "./BoxColor.css";

function colorToHex(color) {
  let hexadecimal = color.toString(16);
  return hexadecimal.length === "1" ? "0" + hexadecimal : hexadecimal;
}

function rgbToHex(r, g, b) {
  return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
}


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