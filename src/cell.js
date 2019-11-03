import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  handleCellClick = () => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  render() {
    return <div className="cell" onClick={this.handleCellClick} style={{backgroundColor: this.state.color}}></div>
  }
}

// it's still not loading the red cells by default lol
