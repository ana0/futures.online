import React, { Component } from 'react';
import user from '../../assets/user.png';
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

  handleClick() {
    this.setState({ display: true })
  }

  render() {
    return (
      <div>
        <img className={this.props.buttonClass} alt="user icon" src={this.props.buttonSrc} onClick={() => this.handleClick()}/>
        {this.state.display ?
          <div className="dropdownContent">
            {this.props.children}
          </div> :
          null}
      </div>
    )
  }
}
