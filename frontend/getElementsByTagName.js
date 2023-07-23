/**
 * @param {Element} rootElement
 * @param {string} tagName
 * @return {Array<Element>}
 */
export default function getElementsByTagName(rootElement, tagName) {
  const elements = [];
  
  const doesTagMatch = (elementTagName) => {
    return tagName.toLowerCase() === elementTagName.toLowerCase();
  }

  const recurse = (element, skip) => {
    if (doesTagMatch(element.tagName, tagName) && !skip) {
      elements.push(element);
    }

    for (const child of element.children) {
      recurse(child);
    }
  }

  recurse(rootElement, true);

  return elements;
}