import React, { Component } from 'react';
import getRandInRange from '../../utils/math';

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
      top: `${getRandInRange(100, window.innerHeight-100)}px`,
      left: `${getRandInRange(0, window.innerWidth/2)}px`
    })
  }
 
  render() {
    return (
      <div className="portal" style={{ top: this.state.top, left: this.state.left }}>
        <a href={this.props.url}>
          <iframe className="big" scrolling="no" title="Art of No Likes" src={this.props.url} />
        </a>
      </div>
    )
  }
}