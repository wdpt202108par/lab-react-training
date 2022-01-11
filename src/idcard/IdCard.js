import React, { Component} from 'react';
import './IdCard.css';
import dayjs from 'dayjs';


/* Iteration 1 | Component: IdCard */

class IdCard extends Component {
/* if no component ligne 1, "extends React.Component" */ 
    
  render (){
    return (
      <div className="Container">

        <img src={this.props.picture} alt="picture" />
        
        <div>
          <ul>
            <li><strong>Last Name : </strong>{this.props.lastName}</li>
            <li><strong>First Name : </strong>{this.props.firstName}</li>
            <li><strong>Gender : </strong>{this.props.gender}</li>
            <li><strong>Height : </strong>{this.props.height/100} m</li>
            <li><strong>Birth : </strong> {dayjs(this.props.birth).format('ddd MMM DD YYYY')}</li>
          </ul>
        </div>
      </div>  
    )
  }
    
}

export default IdCard;