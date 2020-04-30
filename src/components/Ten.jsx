import React, { Component } from 'react';
import bg from '../assets/10.png';
import texbg from '../assets/texbg.jpg';
import circle from '../assets/circleTexture.png';
import Background from './base/Background';
import posts from './../posts.json';
import './../index.css';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <img alt="user icon" src={circle} className="postImage" />
        <p className="ptext">{this.props.children}</p>
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
      url: "https://lattice.tools/MemStackShapeTracer"
    };
  }

  render() {
    return (
      <a href={this.state.url}>
      <iframe className="scrollpic" title="lattice.tools" src={this.state.url} />
      </a>
    )
  }
}

class Ten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts.posts,
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