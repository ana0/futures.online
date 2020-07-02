import React, { Component } from 'react';
import getRandInRange from '../../utils/math';

export default class Portal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [
        "https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/",
        "https://lattice.tools/MemStackShapeTracer",
      ],
      url: '',
      top: '',
      left: '',
    }
  }

  componentDidMount() {
    this.setState({
      url: this.state.urls[getRandInRange(0, this.state.urls.length-1)],
      top: `${getRandInRange(100, window.innerHeight-100)}px`,
      left: `${getRandInRange(0, window.innerWidth/2)}px`
    })
  }
 
  render() {
    return (
      <div className="portal" style={{ top: this.state.top, left: this.state.left }}>
        <a href={this.state.url}>
          <iframe className="big" scrolling="no" title="Art of No Likes" src={this.state.url} />
        </a>
      </div>
    )
  }
}