import {GsapClone} from "./gsap.js";

class Timeline extends GsapClone {
    constructor() {
        super();
        this.queue = [];
        this.isPaused = false;
    }

    to(selector, properties) {
        this.queue.push(() => super.to(selector, properties))
        return this;
    }

    from(selector, properties) {
        this.queue.push(() => super.from(selector, properties));
        return this;
    }

    fromTo(selector, fromToProperties) {
        this.queue.push(() => super.fromTo(selector, fromToProperties));
        return this;
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    reset() {
        this.queue = [];
    }

    play() {
        return (async () => {
            for (const item of this.queue) {
                while (this.isPaused) {
                    await new Promise(r => setTimeout(r, 50));
                }
                await item();
            }
        })();
    }
}