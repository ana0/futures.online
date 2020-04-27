import React, { Component } from 'react';
import Modal from './base/Modal';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <Modal handleClose={this.props.handleDisableLogin} contents={
        <div>
          <h2>enter a username</h2>
          <p>enter a public twitter username to best view the site</p>
          <input type="text"></input>
        </div>}
      />
    )
  }
}