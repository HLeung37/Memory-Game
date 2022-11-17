import './Card.css';
import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {isFlipped: false}

    const flipDown = () => {
      this.setState(state => ({isFlipped: false}));
    }

    const forceUpFunction = () => {
      this.state.forceUp = true;
    }

    const changeText = (text) => {
      this.state.cardText = text;
    }

    const reset = () => {
      this.state.forceUp = false
      this.state.isFlipped = false
    }

    this.state = {isFlipped: false,
      forceUp: false,
      flipDown: flipDown,
      forceUpFunction: forceUpFunction,
      changeText: changeText,
      cardText: this.props.cardText,
      reset: reset
    }

    this.props.function2(this,this.props.id)
  }

  getImage = () => {
    console.log("https://hleung37.github.io/Memory-Game/"+this.state.cardText+".png")
    return "https://hleung37.github.io/Memory-Game/"+this.state.cardText+".png"
  }

  handleClick = () => {
    if (this.state.forceUp == false){
      console.log(this);
      var Flip = this.props.function1(this);
    }
  }

  render() {
    if(this.state.isFlipped === false) {
      return (
        <div className = "back"
             onClick={this.handleClick}>
             <img src = "https://hleung37.github.io/Memory-Game/GenshinCardBack.png" />
        </div>
      );
		}
    return (
      <div className = "front"
           onClick={this.handleClick}>
           <img className = "cardFront" src = {this.getImage()} />
      </div>
    );
  }
}

export default Card;
