import { GsapClone } from "./gsap.js";
import setVariables from "./setVariables.js";

export class Timeline extends GsapClone {
    constructor(controller = {}) {
        super();
        this.queue = [];
        this.isPaused = false;
        this.controller = controller;
    }


    to(selector, props) {
        this.queue.push(() => super.to(selector, props));
        return this;
    }

    from(selector, props) {
        this.queue.push(() => super.from(selector, props));
        return this;
    }

    fromTo(selector, fromToProps) {
        this.queue.push(() => super.fromTo(selector, fromToProps));
        return this;
    }

    play() {
        return (async () => {
            for (const fn of this.queue) {
                while (this.isPaused) {
                    await new Promise((r) => setTimeout(r, 50));
                }
                await fn();
            }
        })();
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

}
