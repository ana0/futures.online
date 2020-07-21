import React, { Component } from 'react';
import moss from '../assets/myco.webp'
import Join from './Join';
import Background from './base/Background';
import Portal from './base/Portal';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [
        "https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/",
        "https://lattice.tools/MemStackShapeTracer",
        "https://sandracrispart.com/index.php/art-of-no-likes-launch/",
        "https://julietagil.com/Nuestra-Victoria",
      ],
    };
  }

  render() {
    return (
      <Background file={moss} id="home">
        {this.state.urls.map((url) => {
            return <Portal url={url} />
          })
        }
        <Join />
      </Background>
    )
  }
}