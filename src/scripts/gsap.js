import setVariables from "./setVariables.js";

export class GsapClone {
    constructor() {
        this.lastState = {
            x: "0px",
            y: "0px",
            scale: "1",
            rotate: "0deg",
            opacity: "1",
        };
    }

    #animationPromise(selector, properties, prefix = '', fromOverride = {}) {
        const elements = document.querySelectorAll(selector);

        return new Promise((resolve) => {
            let count = elements.length;
            if (count === 0) return resolve();

            elements.forEach((element) => {
                const cleanPrefix = prefix.replace(/-$/, '');
                const className = `gsap-${cleanPrefix}`;

                // Use last state's values as "from" if needed
                if (prefix === 'to-') {
                    for (const key in this.lastState) {
                        element.style.setProperty(`--from-${key}`, fromOverride[key] ?? this.lastState[key]);
                    }
                } else if (prefix === 'from-') {
                    for (const key in properties) {
                        element.style.setProperty(`--to-${key}`, this.lastState[key]);
                    }
                }

                // Set target properties
                setVariables(element, properties, prefix);

                element.classList.remove(className);
                void element.offsetWidth;

                requestAnimationFrame(() => {
                    element.classList.add(className);
                });

                const onEnd = () => {
                    element.removeEventListener("animationend", onEnd);
                    element.removeEventListener("transitionend", onEnd);

                    // Save the last state after animation
                    if (prefix === 'to-') {
                        this.lastState = { ...this.lastState, ...properties };
                    } else if (prefix === 'from-') {
                    }

                    if (--count === 0) resolve();
                };

                element.addEventListener("animationend", onEnd);
                element.addEventListener("transitionend", onEnd);

                setTimeout(() => {
                    if (count > 0) {
                        count = 0;
                        resolve();
                    }
                }, 5000);
            });
        });
    }

    to(selector, properties) {
        return this.#animationPromise(selector, properties, 'to-', this.lastState);
    }

    from(selector, properties) {
        return this.#animationPromise(selector, properties, 'from-');
    }

    fromTo(selector, fromToProperties) {
        const elements = document.querySelectorAll(selector);

        return new Promise((resolve) => {
            let count = elements.length;
            if (count === 0) return resolve();

            elements.forEach((element) => {
                setVariables(element, fromToProperties["from"], 'from-');
                setVariables(element, fromToProperties["to"], 'to-');
                setVariables(element, fromToProperties, 'fromTo-');

                element.classList.remove('gsap-fromTo');
                void element.offsetWidth;
                requestAnimationFrame(() => {
                    element.classList.add('gsap-fromTo');
                });

                const onEnd = () => {
                    element.removeEventListener("animationend", onEnd);
                    element.removeEventListener("transitionend", onEnd);
                    this.lastState = { ...this.lastState, ...to }; // Update to final state
                    if (--count === 0) resolve();
                };

                element.addEventListener("animationend", onEnd);
                element.addEventListener("transitionend", onEnd);

                setTimeout(() => {
                    if (count > 0) {
                        count = 0;
                        resolve();
                    }
                }, 5000);
            });
        });
    }
}
