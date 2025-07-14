import setVariables from "./setVariables.js";

export class gsapClone {

    #apply(selector, properties, prefix = '') {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.classList.add(`gsap-${prefix.replace(/-$/, '')}`);
        })
        setVariables(properties, prefix);
    }

    to(selector, properties) {
        this.#apply(selector, properties, 'to-');
    }

    from(selector, properties) {
        this.#apply(selector, properties, 'from-');
    }

    fromTo(selector, fromProperties, toProperties) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.classList.add('gsap-fromTo');
        });
        setVariables(fromProperties, 'from-');
        setVariables(toProperties, 'to-');
    }

}