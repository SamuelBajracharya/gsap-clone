import {GsapClone} from './scripts/gsap.js';
import './styles/styles.scss'

const miniGsap = new GsapClone();

//Basic GSAP
miniGsap.to("#to-div", {
    x: '500px',
    y: '500px',
    duration: '2s',
    rotate: '360deg',
    scale: 2,
    delay: 1,
    ease: "ease-in-out",
    repeat: "infinite",
    direction: "alternate",
})

miniGsap.from(".from-div", {
    x: '-500px',
    y: '500px',
    duration: '2s',
    rotate: '360deg',
    scale: 2,
    delay: 1,
    ease: "ease-in-out",
    repeat: "infinite",
    direction: "alternate",
})

miniGsap.fromTo(".fromTo-div", {
        to: {
            x: '-500px',
            y: '500px',
            rotate: '360deg',
            scale: 2,
        }, from: {
            x: '0px',
            y: '0px',
        },
        duration: '2s',
        delay: 1,
        ease: "ease-in-out",
        repeat: "infinite",
        direction: "alternate",
    }
)
