import React from 'react';
import './Random.css';

class Random extends React.Component {
  render() {
    const randomNumber = Math.floor(Math.random() * (this.props.max-this.props.min)) + this.props.min;
    return (
      <div className="random">
        <p>Random value between {this.props.min} and {this.props.max} {'=>'} {randomNumber} </p>
      </div>
    )
  }
}

export default Random;