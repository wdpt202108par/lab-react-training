import React from 'react';
import './CreditCard.css';

class CreditCard extends React.Component {
  render() {
    let logo="";
    if (this.props.type === 'Visa') {
      logo = "/img/visa.png"
    } else {
      logo = "/img/master-card.svg"
    }
    
    let month="";
    if(this.props.expirationMonth <10) {
      month="0" + this.props.expirationMonth
    } else {
      month = this.props.expirationMonth
    }
    
    return (
      <section className="allcreditcards">
        <div className="creditcard" style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
          <img src={logo} alt="cardlogo"/>
          <p>•••• •••• •••• {this.props.number.substr(-4)}</p>
          <div className="creditcarddetails">
            <p>Expires {month}/{this.props.expirationYear.toString().substr(-2)}</p>
            <p>{this.props.bank}</p>
          </div>
          <p>{this.props.owner}</p>
        </div>
      </section>
    )
  }
}

export default CreditCard;