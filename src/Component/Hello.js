import React, { Component } from "react";
export default class Hello extends Component{
    constructor (props){
        super(props);
    }
    render(){
    return(
        <div className="ui card">
  <div className="image">
    <img src='./images.image.jpg' />
  </div>
  <div className="content">
    <a className="header">{this.props.name}</a>
    <div className="meta">
      <span className="date"> {this.props.joined}</span>
    </div>
    <div className="description">
     {this.props.description}khan
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
    )
    }
}