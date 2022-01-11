import React, { Component} from 'react';
import './Greetings.css';


class Greetings extends Component{
  
  render () {
    /*
    const hello = {
      de:"Hallo",
      fr:"Bonjour"
    }
    */

    if (this.props.lang === "de") {

      return (
      <div><p className="greetingmessage"> Hallo {this.props.children}</p></div>
      );

    } if (this.props.lang === "fr") {
        return (
        <div className="greetingmessage"><p> Hello {this.props.children}</p></div>
        )
      }

  }

}

export default Greetings;