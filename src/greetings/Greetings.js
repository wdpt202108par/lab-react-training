import React, { Component} from 'react';
import './Greetings.css';


class Greetings extends Component{
  
  render () {
    if (this.props.lang === "de") {
      return (
        <div>
          <p className="greetingMessage"> Hallo {this.props.children}</p>
        </div>
      );
    } 
    
    if (this.props.lang === "en") {
      return (
        <div>
          <p className="greetingMessage"> Hello {this.props.children}</p>
        </div>
      )
    }
    
    if (this.props.lang === "es") {
      return (
        <div>
          <p className="greetingMessage"> Ola {this.props.children}</p>
        </div>
      )
    }

    if (this.props.lang === "fr") {
      return (
        <div>
          <p className="greetingMessage"> Bonjour {this.props.children}</p>
        </div>
      )
    }  
  }
}

export default Greetings;