import setVariables from "./setVariables.js";

export class gsapClone {

    #apply(selector, properties, prefix = '') {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.classList.add(`gsap-${prefix.replace(/-$/, '')}`);
            setVariables(element, properties, prefix);
        })
    }

    to(selector, properties) {
        this.#apply(selector, properties, 'to-');
    }

    from(selector, properties) {
        this.#apply(selector, properties, 'from-');
    }

    fromTo(selector, fromToProperties) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.classList.add('gsap-fromTo');
            setVariables(element, fromToProperties["from"], 'from-');
            setVariables(element, fromToProperties["to"], 'to-');
            setVariables(element, fromToProperties, 'fromTo-');
        });
    }

}