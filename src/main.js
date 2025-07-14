import { gsapClone } from './scripts/gsap.js';
import './styles/styles.scss'

const miniGsap = new gsapClone();

miniGsap.to("#app", {
    x: '500px',
    y: '500px',
    duration: '2s',
    rotate: '360deg',
    scale: 2,
    delay: 1,
    ease: "ease-in-out",
    repeat: "infinite",
    yoyo: 1,
})