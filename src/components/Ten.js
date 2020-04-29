import React, { Component } from 'react';
import cg1 from '../assets/cg1.jpg';
import moss1 from '../assets/moss1.jpg';
import sky1 from '../assets/sky1.jpg';
import user from '../assets/user.png';
import Background from './base/Background';
import './../index.css';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <img alt="user icon" src={user} className="postImage" />
        <p className="boilertext">{this.props.children}</p>
      </div>
    )
  }
}

class Posts extends Component {
  postsStyle = {
    backgroundImage: `url(${sky1})`,
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
      posts: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    };
  }

  render() {
    return (
      <Background file={moss1} id="ten">
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