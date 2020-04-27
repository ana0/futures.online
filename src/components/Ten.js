import React, { Component } from 'react';
import cg1 from '../assets/cg1.jpg';
import moss1 from '../assets/moss1.jpg';
import sky1 from '../assets/sky1.jpg';
import Background from './base/Background';
import './../index.css';

class Posts extends Component {
  postsStyle = {
    backgroundImage: `url(${sky1})`,
  }

  render() {
    return (
      <div className="posts" id="tenPosts" style={ this.postsStyle }>
      </div>
    )
  }
}

class ScrollPic extends Component {
  render() {
    return (
      <div className="scrollpic" id="scrollpic">
      <img alt='' src={cg1} />
      </div>
    )
  }
}

class Ten extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  baseStyle = {
    backgroundImage: `url(${moss1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  render() {
    return (
      <Background file={moss1} id="ten">
        <ScrollPic />
        <Posts />
      </Background>
    )
  }
}

export default Ten;