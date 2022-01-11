import React from "react";
import "./Random.css";
import { genRandomNum } from "../Helpers";


function Random(props) {
  return (
    <div className="Random">
      <p>Random value between {props.min} and {props.max} =&gt; {genRandomNum(props.min, props.max)}</p>
    </div>
  );
}



export default Random;