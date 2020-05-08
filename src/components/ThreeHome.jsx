import React, { Component } from 'react';
import moss from '../assets/moss3.jpg'
import * as THREE from 'three';

export default class LiquidBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: true,
    };
  }

  async componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    this.width = width;
    this.height = height;

    this.scene = new THREE.Scene()

    this.start()
  }

  componentWillUnmount(){
    this.mount.removeChild(this.renderer.domElement)
  }


  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render(){
    return(
      <div>
        <div
          style={{
            width: '100%',
            height: '100%',
            left: "0px",
            marginTop: "-8px",
            position: 'fixed' }}
          ref={(mount) => { this.mount = mount }}
        />
      </div>
    )
  }
}