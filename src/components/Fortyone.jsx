import React, { Component } from 'react'
import cg1 from '../assets/cg1.jpg'
import moss from '../assets/moss2.jpg'
import sky from '../assets/sky2.jpg'
import CloseButton from './base/CloseButton';
import Loremipsum from './base/Loremipsum';
import Modal from './base/Modal';
import './../index.css';

class PostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Modal handleClose={this.props.handleClose} contents={<Loremipsum />}/>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header" id="header">
      </div>
    )
  }
}

class Fortyone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPost: true
    };
  }

  baseStyle = {
    backgroundImage: `url(${moss})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  handleClose() {
    this.setState({ displayPost: false })
  }

  render() {
    return (
      <div className="main" id="fortyone" style={ this.baseStyle }>
       <Header />
      {this.state.displayPost ?
        <PostModal handleClose={this.handleClose.bind(this)} /> :
        null
      }
    </div>
    )
  }
}

export default Fortyone;