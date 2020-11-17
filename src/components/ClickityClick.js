// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      count: 0
    };
  }
 
  handleClick = () => {
    let newCount = this.state.count + 1
    this.setState(previousState => {
      return {
        hasBeenClicked: !previousState.hasBeenClicked,
        count: newCount
      }
    })
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
 
export default ClickityClick;