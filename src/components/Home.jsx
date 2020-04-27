import React, { Component } from 'react';
import moss from '../assets/moss3.jpg'
import Login from './Login';
import Background from './base/Background';

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
        {this.state.displayLogin ?
         <Login /> :
         null
        }
      </Background>
    )
  }
}