import React from 'react';
import './BoxColor.css'; 

class BoxColor extends React.Component {
    render() {
        const bgColor = {
            backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`
        }
        return (
            <div className="boxcolor">
              <p style={bgColor}>rgb({this.props.r}, {this.props.g},{this.props.b})</p>
            </div>
        )
        
    }
}

export default BoxColor;