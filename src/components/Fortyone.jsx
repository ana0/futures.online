import React, { Component } from 'react';
import moss from '../assets/moss2.jpg';
import sky from '../assets/sky2.jpg';
import user from '../assets/user.png';
import Loremipsum from './base/Loremipsum';
import Modal from './base/Modal';
import Dropdown from './base/Dropdown';
import getRandInRange from '../utils/math';
import Background from './base/Background';
import './../index.css';

class Header extends Component {
  baseStyle = {
    backgroundImage: `url(${sky})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  render() {
    return (
      <div className="header" id="header" style={this.baseStyle}>
        <button className="blueHeaderButton" />
        <Dropdown button={
          <img className="smallUserImgRight" alt="user icon" src={user} />
        }>
          <Loremipsum />
          <Loremipsum />
        </Dropdown>
      </div>
    )
  }
}

class Fortyone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPosts: true,
      posts: ['one', 'two', 'three']
    };
  } 

  handleClose() {
    this.setState({ displayPosts: false })
  }

  render() {
    return (
      <Background file={moss} id="fortyone">
      <Header />
      {this.state.displayPosts ?
        this.state.posts.map((post) => {
          return (
            <Modal 
              height='100px'
              top={`${getRandInRange(100, window.innerHeight-100)}px`}
              left={`${getRandInRange(0, window.innerWidth/2)}px`}
              key={post} >
                <Loremipsum />
            </Modal> 
          ) 
        }) :
        null
      }
    </Background>
    )
  }
}

export default Fortyone;