import React, { Component} from 'react';
import rgbHex from 'rgb-hex';

class BoxColor extends Component {
  render() {
    const divStyle = {
      backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
      color: 'white',
      textAlign: 'center'
    }

    const rgbVar = `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`

    return(
      <>
        <p style={divStyle}>{rgbVar}<br></br>#{rgbHex(rgbVar)}</p>      
      </>
    )
  }
}

export default BoxColor;