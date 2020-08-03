import React, { Component } from 'react';
import Modal from './base/Modal';
import Form from './Form';

export default class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isSubmitted: 'false'
    };
  }

  componentDidMount() {
    this.setState({isSubmitted: false});
  }

  setSubmitted = () => {
    this.setState({isSubmitted: true});
  }

  render() {
    return (
      <Modal margin="auto" height={'80%'} customStyle={{ overflow: 'auto', opacity: '0.8' }}>
          {!this.state.isSubmitted ? (
            <div>
              <h2 className="boilertext">portal constellation (reviving the webring)</h2>
              <p className="boilertext italics">
                Imagine a cyberspace where we could surf the net between handmade sites rather than constantly being shuffled back through the megastore nodes. Webrings were an interesting early method of creating community between homepage builders through the construction of intentional navigational infrastructure. With this history and fantasy in mind, we are experimenting with methods of linking between each other’s pages as a way of building our own pathways through the net.
                <br />
                &emsp;&emsp;- Brenna Murphy
              </p>
              <p className="boilertext">
                If you’d like to join our webring you can add a portal to any of your own websites by adding
              </p>
              <p className="boilertext monospace">
                &lt;script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ana0/futures.online/portal.js"&gt;&lt;/script&gt;"
              </p>          
              <p className="boilertext">
                <br />  
                between the &lt;head&gt; tags of the site. If you have an artist website you'd like to have included, fill out the form below.
              </p>
              <p className="boilertext">
                we'll review submissions on a rolling basis until Sept 30th and add them to the webring as we go
              </p>
              <Form setSubmitted={this.setSubmitted.bind(this)} />
            </div>
          ) : (
            <div>
              <h2 className="boilertext">thanks for your application!</h2>
              <p className="boilertext"> 
                we'll get back to you soon
              </p>
            </div>
          )}
      </Modal>
    )
  }
}