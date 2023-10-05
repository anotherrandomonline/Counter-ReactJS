import React, { Component } from 'react'
import "./style.css"

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.plusButton = this.plusButton.bind(this)
    this.minusButton = this.minusButton.bind(this)
    this.resetButton = this.resetButton.bind(this)
  }
  plusButton() {
    this.setState({
      counter: this.state.counter+1
    })
  }
  minusButton() {
    this.setState({
      counter: this.state.counter-1
    })
  }
  resetButton() {
    this.setState({
      counter: 0
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.plusButton}>+</button>
        <button onClick={this.minusButton}>-</button>
        <button onClick={this.resetButton}>Reset</button>
      </div>
    )
  }
}

export default App