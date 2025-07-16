import {GsapClone} from './scripts/gsap.js';
import './styles/styles.scss'
import {Timeline} from "./scripts/timeline.js";

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

const squareSize = 300; // px, size of the square side

const timeline = new Timeline();
timeline
    .to("#timeline-to-div", {
        x: `${squareSize}px`, // right
        y: '0px',
        duration: '2s',
        ease: "ease-in-out",
    })
    .to("#timeline-to-div", {
        x: `${squareSize}px`, // down
        y: `${squareSize}px`,
        duration: '2s',
        ease: "ease-in-out",
    })
    .to("#timeline-to-div", {
        x: '0px', // left
        y: `${squareSize}px`,
        duration: '2s',
        ease: "ease-in-out",
    })
    .to("#timeline-to-div", {
        x: '0px', // up (back to start)
        y: '0px',
        duration: '2s',
        ease: "ease-in-out",
    })
    .play();
const timeline2 = new Timeline();
timeline2
    .from("#timeline-from-div", {
        x: `${squareSize}px`,
        y: '0px',
        duration: '2s',
        ease: "ease-in-out",
    })
    .from("#timeline-from-div", {
        x: `${squareSize}px`,
        y: `${squareSize}px`,
        duration: '2s',
        ease: "ease-in-out",
    })
    .from("#timeline-from-div", {
        x: '0px',
        y: `${squareSize}px`,
        duration: '2s',
        ease: "ease-in-out",
    })
    .from("#timeline-from-div", {
        x: '0px',
        y: '0px',
        duration: '2s',
        ease: "ease-in-out",
    })
    .play();

const timeline3 = new Timeline();
timeline3
    .fromTo("#timeline-fromTo-div", {
        from: {x: '0px', y: '0px'},
        to: {x: `-${squareSize}px`, y: '0px'},  // negative x for left
        duration: '2s',
        ease: 'ease-in-out',
    })
    .fromTo("#timeline-fromTo-div", {
        from: {x: `-${squareSize}px`, y: '0px'},
        to: {x: `-${squareSize}px`, y: `${squareSize}px`},
        duration: '2s',
        ease: 'ease-in-out',
    })
    .fromTo("#timeline-fromTo-div", {
        from: {x: `-${squareSize}px`, y: `${squareSize}px`},
        to: {x: '0px', y: `${squareSize}px`},
        duration: '2s',
        ease: 'ease-in-out',
    })
    .fromTo("#timeline-fromTo-div", {
        from: {x: '0px', y: `${squareSize}px`},
        to: {x: '0px', y: '0px'},
        duration: '2s',
        ease: 'ease-in-out',
    })
    .play();

