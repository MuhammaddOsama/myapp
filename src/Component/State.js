import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
  render() {
        const abc = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        const minus = () => {
            this.setState({
                count: this.state.count - 1
            })
        }
        const reset = () => {
            this.setState({
                count: 0
            })
        }
    return (
      <div>
        <hi> Counter {this.state.count} </hi>
        <br />
        
        <button onClick={abc}> Add</button>
        <button onClick={minus}> Minus</button>
        <button onClick={reset}> Reset</button>
        </div>
    )
  }
}
