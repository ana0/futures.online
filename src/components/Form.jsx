import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUrl: 'https://script.google.com/macros/s/AKfycbzsC216Q0EV0Hr890tUWxISArnT7CqJlplJ8eLkZzP6BbPVnxo/exec',
      data: {
        name: '',
        url: '',
        email: '',
        description: '',
      }
    };
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleUrlChange(e) {
    this.setState({url: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  serialize(obj) {
    const keys = Object.keys(obj);
    const strings = keys.map(key => {
      return `${key}=${obj[key]}`
    })
    console.log(`?${strings.join('&')}`)
    return `?${strings.join('&')}`
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`${this.state.getUrl}${this.serialize({
      name: this.state.name,
      url: this.state.url,
      email: this.state.email,
      description: this.state.description,
    })}`)
      .then(response => {
        this.props.setSubmitted();
        return response.json();
      })
  }

  render() {
    return (
      <form id="test-form" onSubmit={this.handleSubmit.bind(this)}>
        
        <div>
          <label className="boilertext">name:</label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            onChange={this.handleNameChange.bind(this)}/>
        </div>

        <div>
          <label className="boilertext">url:</label>
          <input
            type="text"
            name="url"
            placeholder="url"
            onChange={this.handleUrlChange.bind(this)}/>
        </div>

        <div>
          <label className="boilertext">email:</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleEmailChange.bind(this)}/>
        </div>
        
        <div>
          <label className="boilertext">short description:</label>
          <input
            type="text"
            name="description"
            placeholder="description of your site"
            onChange={this.handleDescriptionChange.bind(this)}/>
        </div>

        <p className="boilertext small">
          if you're accepted to the webring, it means other sites throughout the webring 
            will link to and display previews of your site. your name and site description may appear in a directory,
           and there may be a future exhibtion of this webring that includes your site at <a href="https://www.arebyte.com/">
           arebyte gallery</a>. 
          we will email you with relevant news and updates, but only things that concern the webring and your participation in it. 
          if you'd like to leave the ring at any time, you can email sarahfriend@isthisa.com
          <br /><br />
          this project part of the Hervisions residency at Arebyte Onscreen - you can see more info about the residency and the 
          other artworks <a href="https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/">here</a>
        </p>

        <div>
          <button className="blueButton formSubmitButton shadowButton"
            type="submit"
            id="submit-form">Submit</button>
        </div>

      </form>
    )
  }
}