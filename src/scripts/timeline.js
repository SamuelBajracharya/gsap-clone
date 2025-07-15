import { GsapClone } from "./gsap.js";

export class Timeline extends GsapClone {
    constructor() {
        super();
        this.queue = [];
        this.isPaused = false;
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
