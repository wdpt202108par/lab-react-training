import React from "react";
import "./Random.css";


function Random(props) {
  return (
    <div className="Random">
      <p>Random value between {props.min} and {props.max} =&gt; {genRandomNum(props.min, props.max)}</p>
    </div>
  );
}

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default Random;