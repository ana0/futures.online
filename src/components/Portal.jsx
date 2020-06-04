import React, { Component } from 'react';
import moss from '../assets/moss3.jpg'
import Background from './base/Background';
import portal from './base/portal';

export default class Portal extends Component {

  componentDidMount () {
    const script = document.createElement('script');

    script.src = portal;
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Background file={moss} id="home">
      </Background>
    )
  }
}