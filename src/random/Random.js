import React from "react";
import "./Random.css";


function Random(props) {
  const min = Number(props.min);
  const max = Number(props.max);

  return (
    <div className="Random">
      <p>Random value between {min} and {max} =&gt; {genRandomNum(min, max)}</p>
    </div>
  );
}

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default Random;