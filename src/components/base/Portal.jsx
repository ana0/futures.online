import React, { Component } from 'react';
import getRandInRange from '../../utils/math';
import arrow from '../../assets/arrow.png'

export default class Portal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: '',
      left: '',
    }
  }

  componentDidMount() {
    this.setState({
      top: getRandInRange(100, window.innerHeight-100),
      left: getRandInRange(0, window.innerWidth/2)
    })
  }
 
  render() {
    return (
      <div>
        <div className="portal" style={{ top: `${this.state.top}px`, left: `${this.state.left}px` }}>
          {this.props.url.https ?
          <iframe className="big" scrolling="no" title="Art of No Likes" src={this.props.url.url} /> :
          <img
            className="bigImg"
            alt="portal"
            scrolling="no"
            title="Art of No Likes"
            src={process.env.PUBLIC_URL + this.props.url.img} />
          }
        </div>
        <a href={this.props.url.url}>
            <img alt="enter" src={arrow} className="arrow" style={{ top: `${this.state.top+15}px`, left: `${this.state.left}px` }}/>
        </a>
      </div>
    )
  }
}