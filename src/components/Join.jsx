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
                Applications to join the webring are now closed! Check back soon for an update about our next steps
              </p>
              <p className="boilertext">
                If you’d like to contribute to our webring you can still add a portal to any of your own websites by adding
              </p>
              <p className="boilertext monospace">
                &lt;script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ana0/futures.online/portal.js"&gt;&lt;/script&gt;
              </p>          
              <p className="boilertext">
                <br />  
                between the &lt;head&gt; tags of the site. 
              </p>
              <p className="boilertext">
                Thank you for joining us in imagining an alternative internet!
              </p>
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