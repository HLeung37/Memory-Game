import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {isFlipped: false}

    const flipDown = () => {
      this.setState(state => ({isFlipped: !state.isFlipped}));
    }

    this.state = {isFlipped: false, flipDown: flipDown}
  }

  handleClick = () => {
    this.setState(state => ({isFlipped: !state.isFlipped}));
    var Flip = this.props.function1(this);
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
