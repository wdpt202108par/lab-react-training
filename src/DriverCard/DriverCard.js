import React from 'react';
import './DriverCard.css';
import Rating from '../Rating/Rating.js';

class DriverCard extends React.Component {
  render() {
    return(
      <div className="drivercard">
        <img src={this.props.img} alt="driveravatar"/>
        <div className="drivername">
          <p>{this.props.name}</p>
            <Rating>{this.props.rating}</Rating>
          <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
        </div>
      </div>
    )
  }
}

export default DriverCard;