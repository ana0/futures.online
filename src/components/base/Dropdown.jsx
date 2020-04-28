import React, { Component } from 'react';

export default class Dropdown extends Component { 
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
