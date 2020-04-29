import React, { Component } from 'react';
import './../../dropdown.css';

export default class Dropdown extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  } 

  baseStyle = {
  }

  handleDisplayOn() {
    this.setState({ display: true })
  }

  handleDisplayOff() {
    this.setState({ display: false })
  }

  render() {
    return (
      <div>
        <img className={this.props.buttonClass} alt="user icon" src={this.props.buttonSrc} onClick={() => this.handleDisplayOn()}/>
        {this.state.display ?
          <div className="main" onClick={() => this.handleDisplayOff()}>
          <div className="dropdownContent">
            {this.props.children}
          </div>
          </div> :
          null}
      </div>
    )
  }
}
