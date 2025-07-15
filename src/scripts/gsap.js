import setVariables from "./setVariables.js";

export class GsapClone {
    #animationPromise(selector, properties, prefix = '') {
        const elements = document.querySelectorAll(selector);
        return new Promise((resolve) => {
            let elementCount = elements.length;
            if (elementCount === 0) {
                resolve();
                return;
            }
            elements.forEach((element) => {
                element.classList.add(`gsap-${prefix.replace(/-$/, '')}`);
                setVariables(element, properties, prefix);
                const onAnimationEnd = (event) => {
                    if (event.target === element) {
                        element.removeEventListener("animationend", onAnimationEnd);
                        element.removeEventListener("transitionend", onAnimationEnd);
                        elementCount--;
                        if (elementCount === 0) {
                            resolve();
                        }
                    }
                }
                element.addEventListener("animationend", onAnimationEnd);
                element.addEventListener("transitionend", onAnimationEnd);

                setTimeout(() => {
                    if (elementCount > 0) {
                        elementCount = 0;
                        resolve();
                    }
                }, 5000);
            })
        })
    }

    to(selector, properties) {
        return this.#animationPromise(selector, properties, 'to-');
    }

    from(selector, properties) {
        return this.#animationPromise(selector, properties, 'from-');
    }

    fromTo(selector, fromToProperties) {
        const elements = document.querySelectorAll(selector);
        return new Promise((resolve) => {
            let elementCount = elements.length;
            if (elementCount === 0) {
                resolve();
                return;
            }
            elements.forEach((element) => {
                element.classList.add('gsap-fromTo');
                setVariables(element, fromToProperties["from"], 'from-');
                setVariables(element, fromToProperties["to"], 'to-');
                setVariables(element, fromToProperties, 'fromTo-');

                const onAnimationEnd = (event) => {
                    if(event.target === element){
                        element.removeEventListener("animationend", onAnimationEnd);
                        element.removeEventListener("transitionend", onAnimationEnd);
                        elementCount--;
                        if(elementCount === 0){
                            resolve();
                        }
                    }
                }
                element.addEventListener("animationend", onAnimationEnd);
                element.addEventListener("transitionend", onAnimationEnd);

                setTimeout(() => {
                    if(elementCount > 0){
                        elementCount = 0;
                        resolve();
                    }
                }, 5000);
            })
        })
    }

}