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
      <Modal margin="auto">
        <div>
          <h2 className="boilertext">enter a username</h2>
          <p className="boilertext">enter a public twitter username to best view the site</p>
          <input style={{margin: "20px"}} type="text"></input>
        </div>
      </Modal>
    )
  }
}