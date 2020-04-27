export default function getRandInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}