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
      this.setState(state => ({isFlipped: !state.isFlipped}));
      var Flip = this.props.function1(this);
    }
  }

  render() {
    if(this.state.isFlipped === false) {
      return (
        <div style={{height:'100px', width:'75px', backgroundColor:'black', borderStyle:'solid', borderColor:'red'}}
             onClick={this.handleClick}></div>
      );
		}
    return (
      <div style={{height:'100px', width:'75px', backgroundColor:'lightblue', borderStyle:'solid', borderColor:'red'}}
           onClick={this.handleClick}>{this.props.cardText}</div>
    );
  }
}

export default Card;
