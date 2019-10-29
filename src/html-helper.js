export function imageElement(item, attributes) {
    let image = document.createElement('img');
    image.setAttribute('src', item);
    setAttributes(image, attributes);

    return image;
}

export function divElement(item, attributes) {
    let element = document.createElement('div');
    element.innerText = item;
    setAttributes(element, attributes);

    return element;
}

function setAttributes(element, attributes) {
    if (attributes === undefined) {
        return;
    }
    
    for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(attributes[i].key, attributes[i].value)
    }
}