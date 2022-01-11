import React from "react";
import "./Greetings.css";


const greetingMsgObj = {
  fr: "Bonjour",
  eng: "Hello",
  de: "Hallo",
  es: "Hola"
}

function Greetings(props) {
  const greetingMsg = greetingMsgObj[props.lang];

  return (
    <div className="Greetings">
      <p>{greetingMsg} {props.children}</p>
    </div>
  );
}


export default Greetings;