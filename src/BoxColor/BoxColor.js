import React from 'react';

class BoxColor extends React.Component {
    
    render() {
        
        return (
        <div>
            <p>{salutation[this.props.lang]} {this.props.children}</p>
        </div>
        )
    }
  }

export default BoxColor;