export default class ElementBuilder {
    constructor(elementType) {
        this.element = document.createElement(elementType);
    }

    addAttribute(name, value) {
        this.element.setAttribute(name, value);
        return this;
    }

    appendElement(element) {
        this.element.append(element);
        return this;
    }
}