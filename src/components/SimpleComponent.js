// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy'
    }
  }

  clickHandler= () => {
    let newMood = this.state.mood 
    if(newMood==='happy')
    newMood = 'sad'
    else
    newMood = 'happy'
    this.setState(
        { mood: newMood }
    )
  }

  render() {
    return (
    <div onClick={this.clickHandler}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;