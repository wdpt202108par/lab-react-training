import React from "react";
import { displayStars } from "../Helpers";


function Rating(props)  {
  return (
    <div className="Rating">
      <div>{ displayStars(props.children) }</div>
    </div>
  );
}


export default Rating;