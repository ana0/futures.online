import React, { Component } from 'react';
import './../../dropdown.css';

export default class Dropdown extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  } 

  baseStyle = {
  }

  handleClose() {
    this.setState({ display: false })
  }

  render() {
    return (
      this.state.display ?
        <div className="dropdown" style={this.baseStyle}>
        {this.props.button}
          <div className="dropdownContent">
          {this.props.children}
          </div>
        </div> :
        null
    )
  }
}
