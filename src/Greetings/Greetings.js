import React from 'react';
import './Greetings.css';

class Greetings extends React.Component {
  render() {
    const Greet = {
      de:"Hallo",
      en:"Hello",
      es:"Hola",
      fr:"Bonjour"
    }

    return (
      <div className="greetings">
        <p>{Greet[this.props.lang]} {this.props.children}</p>
      </div>
    )
  }
}

export default Greetings;