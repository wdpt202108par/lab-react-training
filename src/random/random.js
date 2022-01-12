import React, { Component} from 'react';
import './Random.css';


class Random extends Component {
  render() {
    return (
      <div>
        <p className="random"> Random value between {this.props.min} and {this.props.max} = {Math.ceil(Math.random() * this.props.max)}</p>
      </div>
    )
  }
}

export default Random;