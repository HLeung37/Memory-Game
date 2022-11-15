import './Card.css';
import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {isFlipped: false}

    const flipDown = () => {
      this.setState(state => ({isFlipped: !state.isFlipped}));
    }

    const forceUpFunction = () => {
      this.state.forceUp = true;
    }

    this.state = {isFlipped: false, forceUp: false, flipDown: flipDown, forceUpFunction: forceUpFunction}
  }

  handleClick = () => {
    if (this.state.forceUp == false){
      var Flip = this.props.function1(this);
    }
  }

  render() {
    if(this.state.isFlipped === false) {
      return (
        <div className = "back"
             onClick={this.handleClick}>
        </div>
      );
		}
    return (
      <div className = "front"
           onClick={this.handleClick}><p className = "cardText">{this.props.cardText}</p>
      </div>
    );
  }
}

export default Card;
