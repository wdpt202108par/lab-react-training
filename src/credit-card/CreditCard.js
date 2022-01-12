import React, { Component} from 'react';
import './CreditCard.css';

class CreditCard extends Component {
  render() {
    const divStyle = {
      backgroundColor: `${this.props.bgColor}`,
      color: `${this.props.color}`,
    };
    
    const hiddenNumber = `°°°° °°°° °°°° ${this.props.number.slice(-4)}`;

    let month;
    if (this.props.expirationMonth < 10) {
      month = `0${this.props.expirationMonth}`
    } else {
      month = `${this.props.expirationMonth}`
    }
    
    return (
      <div>
        <div className="creditCard" style={divStyle}>
          <div className="typeCard">{this.props.type}</div>
          <div className="number">{hiddenNumber}</div>
          <div className="expiration">
            <div >Expires {month}/{this.props.expirationYear}</div>      
            <div className="bank">{this.props.bank}</div>
          </div>
          <div className="owner">{this.props.owner}</div>        
        </div>      
      </div>
    )
  }
}

export default CreditCard