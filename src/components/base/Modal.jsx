import React, { Component } from 'react';
import CloseButton from './CloseButton';

export default class Modal extends Component { 
  render() {
    return (
      <div class="modal">
      <CloseButton handleClick={this.props.handleClose}/>
      {this.props.contents}
      </div>
    )
  }
}
