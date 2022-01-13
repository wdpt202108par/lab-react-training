import React from 'react';


class IdCard extends React.Component {
    render() {
        return (
        <div id="idCard">
            <img alt='' src={this.props.picture}/>
            <div>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.height}</p>
                <p>{this.props.birth.toDateString()}</p>
            </div>
        </div>)
    }
  }

export default IdCard;
