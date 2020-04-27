import React, { Component } from 'react';
import close from '../assets/close.png'

export default class CloseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <img alt="close" src={close} className="closeButton" onClick={() => this.props.handleClick()}/>
    )
  }
}