import React, { Component } from 'react';
import getRandInRange from '../../utils/math';
import arrow from '../../assets/arrow.png'
import question from '../../assets/question.png'

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
      left: getRandInRange(0, window.innerWidth)
    })
  }
 
  render() {
    return (
      <div>
        <div className="portal" style={{ top: `${this.state.top}px`, left: `${this.state.left}px` }}>
          {this.props.site.https ?
          <iframe className="big" scrolling="no" title="Art of No Likes" src={this.props.site.url} /> :
          <img
            className="bigImg"
            alt="portal"
            scrolling="no"
            title="Art of No Likes"
            src={process.env.PUBLIC_URL + this.props.site.img} />
          }
        </div>
        <a href={this.props.site.url}>
            <img alt="enter" src={arrow} className="arrow" style={{ top: `${this.state.top+15}px`, left: `${this.state.left}px` }}/>
        </a>
        <a href="#">
            <img alt="about" src={question} className="question" style={{ top: `${this.state.top+55}px`, left: `${this.state.left}px` }}/>
        </a>
      </div>
    )
  }
}