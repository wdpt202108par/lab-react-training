import React, { Component} from 'react';
import './Rating.css';

class Rating extends Component {
  render() {

    const whiteStar = '☆';
    const blackStar = '★';

    let rating = Math.round(this.props.children);

    return (
      <>
      <div className="rating">{blackStar.repeat(rating)}{whiteStar.repeat(5 - rating)}</div>
      </>
    )
  }
}

export default Rating;