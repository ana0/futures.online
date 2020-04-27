import React, { Component } from 'react';
import CloseButton from './CloseButton';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <div className="modal" id="login">
        <CloseButton handleClick={this.props.handleDisableLogin}/>
        <h2>enter a username</h2>
        <p>enter a public twitter username to best view the site</p>
        <input type="text"></input>
      </div>
    )
  }
}