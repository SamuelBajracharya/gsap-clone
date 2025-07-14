const setVariables = (element, animationProp = {}, prefix) => {
    for (const [key, value] of Object.entries(animationProp)){

        if (value == null) continue;

        element.style.setProperty(`--${prefix}${key}`, value);
    }
}

export default setVariables;