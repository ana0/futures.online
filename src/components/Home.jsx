import React, { Component } from 'react';
import moss from '../assets/myco.webp'
import Join from './Join';
import Background from './base/Background';
import Portal from './base/Portal';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [
        {url: "https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/", https: true},
        {url: "https://lattice.tools/MemStackShapeTracer", https: true},
        {url: "http://sandracrispart.com/index.php/art-of-no-likes-launch/", https: false, img: 'sandracrispart.jpg'},
        {url: "http://julietagil.com/Nuestra-Victoria", https: false, img: 'julietagil.jpg'},
      ],
    };
  }

  render() {
    return (
      <Background file={moss} id="home">
        {this.state.sites.map((site) => {
            return <Portal site={site} key={site.url} />
          })
        }
        <Join />
      </Background>
    )
  }
}