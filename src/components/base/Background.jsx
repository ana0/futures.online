import React, { Component } from 'react';

export default class Background extends Component { 

  baseStyle = {
    backgroundImage: `url(${this.props.file})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  render() {
    return (
      <div className="main" id={this.props.id} style={ this.baseStyle }>
        {this.props.children}
      </div>
    )
  }
}
