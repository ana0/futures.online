import React, { Component } from 'react'

export default class Loremipsum extends Component { 
  render() {
    return (
      <p className="boilertext">{
        this.props.children ?
          this.props.children :
          '1000 Likes = 1000 Likes.'
      }</p>
    )
  }
}
