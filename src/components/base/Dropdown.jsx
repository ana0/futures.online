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
        <div className="dropdown" style={this.baseStyle}>
        <div onClick={this.handleClick.bind(this)} >
          <img className="smallUserImgRight" alt="user icon" src={user} />
        </div>
        {this.state.display ?
          <div className="dropdownContent">
            {this.props.children}
          </div> :
          null}
      </div>
    )
  }
}
