import React from 'react';


class Greetings extends React.Component {
    render() {
        const salutation = {de: "Hallo", fr: "Bonjour"};
        return (
        <div id="idCard">
            <p>{salutation[this.props.lang]} {this.props.children}</p>
        </div>
        )
    }
  }

export default Greetings;
