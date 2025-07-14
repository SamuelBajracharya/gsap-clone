const root = document.querySelector(':root');

const setVariables = (animationProp = {}, prefix) => {
    for (const [key, value] of Object.entries(animationProp)){

        if (value == null) continue;

        root.style.setProperty(`--${prefix}${key}`, value);
    }
}

export default setVariables;