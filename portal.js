window.addEventListener('load', function () {
  const sites = [
    {url: "https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/", https: true},
    {url: "https://lattice.tools/MemStackShapeTracer", https: true},
    {url: "https://possible.social/", https: true},
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
    {url: "http://lovelanguages.melaniehoff.com/", https: false, img: 'digitallovelanguages.png'}
]

  const getRandInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const site = sites[getRandInRange(0, sites.length-1)];

  const horizontal = getRandInRange(0, window.innerWidth/2);
  const vertical = getRandInRange(100, window.innerHeight-100);

  let inner;

  if (site.https) {
    inner = document.createElement("iframe"); 
    inner.setAttribute('src', site.url);
    inner.setAttribute('scrolling', "no");
    inner.setAttribute('title', "Art of No Likes");
    inner.style.width = '1000px';
    inner.style.height = '500px';
    inner.style.overflow = 'hidden';
  } else {
    inner = document.createElement("img"); 
    inner.setAttribute('src', `https://possible.social/${site.img}`);
    inner.setAttribute('scrolling', "no");
    inner.style.overflow = 'hidden';
  }

  const arrow = document.createElement("img"); 
  arrow.setAttribute('src', 'https://possible.social/arrow.png');
  arrow.style.position = 'fixed';
  arrow.style.width = '30px';
  arrow.style.top = `${vertical+15}px`;
  arrow.style.left = `${horizontal}px`;
  arrow.style.zIndex = "110";

  const a = document.createElement("a"); 
  a.setAttribute('href', site.url);
  a.appendChild(arrow);

  const portal = document.createElement("div"); 
  portal.style.width = '140px';
  portal.style.height = '150px';
  portal.style.border = 'white';
  portal.style.borderStyle = 'solid';
  portal.style.borderWidth = '10px';
  portal.style.overflow = 'auto';
  portal.style.position = 'fixed';
  portal.style.webkitOverflowScrolling = "touch";
  portal.style.top = `${vertical}px`
  portal.style.left = `${horizontal}px`
  portal.style.zIndex = "100"
  portal.appendChild(inner);

  document.getElementsByTagName('body')[0].appendChild(portal);
  document.getElementsByTagName('body')[0].appendChild(a);
})
