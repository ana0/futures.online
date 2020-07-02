import React, { Component } from 'react';
import moss from '../assets/moss3.jpg'
import Join from './Join';
import Background from './base/Background';
import Portal from './base/Portal';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: true,
    };
  }

  handleDisableLogin() {
    this.setState({ displayLogin: false })
  }

  render() {
    return (
      <Background file={moss} id="home">
        <Portal />
        <Portal />
        <Portal />
        {this.state.displayLogin ?
         <Join /> :
         null
        }
      </Background>
    )
  }
}