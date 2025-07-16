import {Timeline} from "./timeline.js";

export class ScrollTrigger {
    constructor({trigger, start, end}) {
        this.trigger = trigger;
        this.start = start;
        this.end = end;
        this.timeline = new Timeline();
    }

    to(selector, props) {
        this.timeline.to(selector, props);
        return this;
    }
    from(selector, props) {
        this.timeline.from(selector, props);
        return this;
    }
    fromTo(selector, fromToProps) {
        this.timeline.fromTo(selector, fromToProps);
        return this;
    }

}
