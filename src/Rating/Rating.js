import React from 'react';
import './Rating.css';

function starsnb(element){
    element = Math.round(element);
    return element;
}

class Rating extends React.Component {
    render() {
    const fullstar ="★";
    const emptystar="☆";
    
      return (
        <div >
          <p className="rating"> {fullstar.repeat(starsnb(this.props.children))}{emptystar.repeat(5 - starsnb(this.props.children))}</p>
        </div>
        
      )
    }
}

export default Rating;