import React, { Component } from 'react';
import moss from '../assets/myco.webp'
import Join from './Join';
import Background from './base/Background';
import Portal from './base/Portal';
import getRandInRange from '../utils/math';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [
        {url: "https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/", https: true},
        {url: "https://lattice.tools/MemStackShapeTracer", https: true},
        {url: "http://sandracrispart.com/index.php/art-of-no-likes-launch/", https: false, img: 'sandracrispart.jpg'},
        {url: "http://julietagil.com/Nuestra-Victoria", https: false, img: 'julietagil.jpg'},
        {url: "https://www.ourmachine.net/", https: true},
        {url: "https://barrythrew.com/", https: true},
        {url: "https://www.badalmer.com/", https: true},
        {url: "https://dietrichmeyer.info/", https: true},
        {url: "https://towhomthismayconcern.org/", https: true},
        {url: "https://anti-materia.org/", https: true},
        {url: "https://a.pureapparat.us/", https: true},
        {url: "http://www.isladen.world/", https: false, img: 'isladen.jpg'},
        {url: "https://michaelreale.format.com/", https: true},
        {url: "https://www.carsonteal.com/", https: true},
        {url: "https://boringmommyblogblog.wordpress.com/", https: true},
        {url: "https://vincentcharlebois.com/", https: true},
        {url: "https://verns.world", https: true},
        {url: "https://palomakop.tv/", https: true},
        {url: "https://garbageprintcamo.wordpress.com/", https: true},
        {url: "https://www.hemligaskolan.se/", https: true},
        {url: "https://yletalgnimlab.me/", https: true},
        {url: "https://eviau.github.io/thiswebsite/index.html", https: true},
        {url: "http://dagmarschuerrer.com/", https: false, img: 'dagmarschuerrer.jpg'},
        {url: "https://rozina.neocities.org/", https: true},
        {url: "https://www.francescoimola.com/", https: true},
        {url: "https://lattice.tools/", https: true},
        {url: "https://preppers.gallery/", https: true},
        {url: "https://www.hervisions.world/", https: true},
        {url: "http://lovelanguages.melaniehoff.com/", https: false, img: 'digitallovelanguages.png'},
        {url: "http://www.srswthi.com/", https: false, img: 'saraswathisubbaraman.png'},
        {url: "https://kevinclancy.studio/", https: true},
        {url: "http://www.offsiteproject.org/", https: false, img: 'offsiteproject.png'},
        {url: "https://www.tuckernickman.com/beginning.html", https: true},
        {url: "http://joemygan.com/", https: false, img: 'joemygan.jpg'},
        {url: "https://kaleyflowers.com/", https: true}
      ],
    };
  }

  render() {
    const picks = [];
    for (let i = 0; i < 12; i++) {
       const pick = this.state.sites[getRandInRange(0, this.state.sites.length-1)];
       picks.push(pick);
    }
    return (
      <Background file={moss} id="home">
        {
            picks.map((site) => {
            return <Portal site={site} key={site.url} />
          })
        }
        <Join />
      </Background>
    )
  }
}