import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.props.tasks.map(task => {
                    return <li>{task.text} - {task.status}</li>
                })
            }
        </ul>
      </div>
    )
  }
}
