window.addEventListener('load', function () {
  const urls = [
    "https://aos.arebyte.com/contents/hervisions-the-art-of-no-likes/",
    "https://lattice.tools/MemStackShapeTracer",
    "https://possible.social/",
    "https://sandracrispart.com/index.php/art-of-no-likes-launch/",
    "https://julietagil.com/Nuestra-Victoria",
  ]

  const getRandInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const url = urls[getRandInRange(0, urls.length-1)];


  const iframe = document.createElement("iframe"); 
  iframe.setAttribute('src', url);
  iframe.setAttribute('scrolling', "no");
  iframe.setAttribute('title', "Art of No Likes");
  iframe.style.width = '1000px';
  iframe.style.height = '500px';
  iframe.style.overflow = 'hidden';

  const a = document.createElement("a"); 
  a.setAttribute('href', url);
  a.appendChild(iframe);

  const portal = document.createElement("div"); 
  portal.style.width = '140px';
  portal.style.height = '150px';
  portal.style.border = 'white';
  portal.style.borderStyle = 'solid';
  portal.style.borderWidth = '10px';
  portal.style.overflow = 'auto';
  portal.style.position = 'fixed';
  portal.style.webkitOverflowScrolling = "touch";
  portal.style.top = `${getRandInRange(100, window.innerHeight-100)}px`
  portal.style.left = `${getRandInRange(0, window.innerWidth/2)}px`
  portal.style.zIndex = "100"
  portal.appendChild(a);

  document.getElementsByTagName('body')[0].appendChild(portal)
})
