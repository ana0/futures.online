import React, { Component } from 'react';
import Modal from './base/Modal';
import Form from './Form';
// import escapeHTML from './utils/escapeHTML';

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <Modal margin="auto" height={'80%'}>
        <div>
          <h2 className="boilertext">portal constellation (reviving the webring)</h2>
          <p className="boilertext italics">
            Imagine a cyberspace where we could surf the net between handmade sites rather than constantly being shuffled back through the megastore nodes. Webrings were an interesting early method of creating community between homepage builders through the construction of intentional navigational infrastructure. With this history and fantasy in mind, we are experimenting with methods of linking between each other’s pages as a way of building our own pathways through the net.
            <br />
            - Brenna Murphy
          </p>
          <p className="boilertext">
            If you’d like to join our webring you can add a portal to any of your own websites by adding
          </p>
          <p className="boilertext monospace">
            &lt;script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ana0/futures.online@latest/portal.js"&gt;&lt;/script&gt;"
          </p>          
          <p className="boilertext">
            between the &lt;head&gt; tags and fill out the form below.
          </p>
          <p className="boilertext">
            we'll review submissions on a rolling basis and add them to the webring as we go
          </p>
          <Form />
        </div>
      </Modal>
    )
  }
}