import React, { Component } from 'react';
import CloseButton from './CloseButton';

export default class Modal extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  } 

  baseStyle = {
    height: this.props.height || '600px',
    width: this.props.width || '50%',
    left: this.props.left || '0px',
    right: this.props.right || '0px',
    top: this.props.top || '50px',
    margin: this.props.margin
  }

  handleClose() {
    this.setState({ display: false })
  }

  render() {
    return (
      this.state.display ?
        <div className="modal" style={this.baseStyle}>
        <CloseButton handleClick={this.handleClose.bind(this)}/>
        {this.props.children}
        </div> :
        null
    )
  }
}
