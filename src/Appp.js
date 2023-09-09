import React, { Component } from 'react'
import List from './List';

export default class Appp extends Component {
    constructor() {
        super();
    
    this.state = {
    tasks: [
        {"text": "Osama", "status": "married" },
        {"text": "ali", "status": "single" },
        {"text": "ishfaq" , "status": "divorce" }]
    }
    
    }
render() {
    return (
        <div>
            <List tasks={this.state.tasks} />

        </div>
    )
}
}
