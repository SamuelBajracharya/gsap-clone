function setVariables(element, properties, prefix = '') {
    const cleanPrefix = prefix.replace(/-$/, '');

    for (const [key, value] in properties) {
        if (value === null) continue;

        element.style.setProperty(`--${cleanPrefix}-${key}`, value);
    }
}

export default setVariables;
