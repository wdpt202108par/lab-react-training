import React from 'react';

function numero (min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Random extends React.Component {
    render() {
        return (
        <div id="idCard">
            <p>{this.props.min}</p>
            <p>{this.props.max}</p>
            <p>{numero(Number(this.props.min), Number(this.props.max))}</p>  
        </div>
        )
    }
  }

export default Random;
