import React from 'react';
import './IdCard.css';

class IdCard extends React.Component {
  render() {
    return (
      <div className="idcard">
       <img src={this.props.picture}  alt="idavatar"/>
       <ul className="carddetails">
         <li><b>First name :</b> {this.props.firstName}</li>
         <li><b>Last name :</b> {this.props.lastName}</li>
         <li><b>Gender :</b> {this.props.gender}</li>
         <li><b>Height :</b> {this.props.height/100}m</li>
         <li><b>Birth:</b> {this.props.birth.toDateString()}</li> 
       </ul>
     </div>
    )
  }
}

export default IdCard;