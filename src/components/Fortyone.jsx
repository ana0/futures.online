import React, { Component } from 'react';
import bg from '../assets/41.png';
import header from '../assets/41header.jpg';
import user from '../assets/userbg.jpg';
import Loremipsum from './base/Loremipsum';
import Modal from './base/Modal';
import getRandInRange from '../utils/math';
import Background from './base/Background';
import Dropdown from './base/Dropdown';
import { Link } from 'react-router-dom';
import './../index.css';

class Header extends Component {
  baseStyle = {
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top'
  }

  render() {
    return (
      <div className="header" id="header" style={this.baseStyle}>
        <button className="blueButton rightHeaderButton shadowButton" onClick={() => this.props.spawnPost()}/>
        <Dropdown buttonClass="smallUserImgRight" buttonSrc={user}>
          <Link to="/profile">Your Profile</Link>
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
      initialPosts: ['one', 'two', 'three'],
      spawnedPosts: []
    };
  } 

  handleClose() {
    this.setState({ displayPosts: false })
  }

  spawnPost() {
    const index = getRandInRange(0, this.state.initialPosts.length-1)
    this.setState({ spawnedPosts: [...this.state.spawnedPosts, this.state.initialPosts[index]] })
  }

  render() {
    return (
      <Background file={bg} id="fortyone">
      <Header spawnPost={this.spawnPost.bind(this)}/>
      {this.state.displayPosts ?
        this.state.initialPosts.map((post) => {
          return (
            <Modal 
              height={null}
              top={`${getRandInRange(100, window.innerHeight-100)}px`}
              left={`${getRandInRange(0, window.innerWidth/2)}px`}
              key={post} >
                <Loremipsum />
            </Modal> 
          ) 
        }):
        null
      }
      {this.state.displayPosts ?
        this.state.spawnedPosts.map((post) => {
          return (
            <Modal 
              height='100px'
              top={`${getRandInRange(100, window.innerHeight-100)}px`}
              left={`${getRandInRange(0, window.innerWidth/2)}px`}
              key={post} >
                <Loremipsum />
            </Modal> 
          ) 
        }):
        null
      }
    </Background>
    )
  }
}

export default Fortyone;