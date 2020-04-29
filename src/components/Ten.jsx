import React, { Component } from 'react';
import bg from '../assets/10.png';
import texbg from '../assets/texbg.jpg';
import circle from '../assets/circleTexture.png';
import Background from './base/Background';
import './../index.css';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <img alt="user icon" src={circle} className="postImage" />
        <p className="boilertext">{this.props.children}</p>
      </div>
    )
  }
}

class Posts extends Component {
  postsStyle = {
    backgroundImage: `url(${texbg})`,
  }

  render() {
    return (
      <div className="posts" id="tenPosts" style={ this.postsStyle }>
      {this.props.children}
      </div>
    )
  }
}

class ScrollPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://lattice.tools/MemStackShapeTracer2"
    };
  }

  render() {
    return (
      <iframe className="scrollpic" title="lattice.tools" src={this.state.url} />
    )
  }
}

class Ten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    };
  }

  render() {
    return (
      <Background file={bg} id="ten">
        <ScrollPic />
        <Posts>
          { this.state.posts.map((post) => {
            return (
              <Post key={post}>
                {post}
              </Post> 
            ) 
          })
        }

        </Posts>
      </Background>
    )
  }
}

export default Ten;