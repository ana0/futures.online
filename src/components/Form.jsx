import React, { Component } from 'react';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUrl: 'https://script.google.com/macros/s/AKfycbzsC216Q0EV0Hr890tUWxISArnT7CqJlplJ8eLkZzP6BbPVnxo/exec',
      data: {
        name: '',
        url: '',
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
      description: this.state.description,
    })}`)
      .then(response => response.json())
  }


  render() {
    return (
      <form id="test-form" onSubmit={this.handleSubmit.bind(this)}>
        
        <div>
          <label className="boilertext">your name</label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            style={{margin: "20px"}}
            onChange={this.handleNameChange.bind(this)}/>
        </div>

        <div>
          <label className="boilertext">your url</label>
          <input
            type="text"
            name="url"
            placeholder="url"
            style={{margin: "20px"}}
            onChange={this.handleUrlChange.bind(this)}/>
        </div>
        
        <div>
          <label className="boilertext">short description</label>
          <input
            type="text"
            name="description"
            placeholder="description of your site"
            style={{margin: "20px"}}
            onChange={this.handleDescriptionChange.bind(this)}/>
        </div>

        <div>
          <button type="submit"id="submit-form">Submit</button>
        </div>

      </form>
    )
  }
}