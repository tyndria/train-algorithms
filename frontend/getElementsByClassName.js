/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
export default function getElementsByClassName(element, classNamesStr) {
  const classNames = Array.from(new Set(classNamesStr.split(' ').filter(x => Boolean(x))));
  const elements = [];
  
  const isSubset = (source, subset) => {
    return subset.every(x => source.contains(x));
  }

  const recurse = (element, skip) => {
    if (isSubset(element.classList, classNames) && !skip) {
      elements.push(element);
    }

    for (const child of element.children) {
      recurse(child);
    }
  }

  recurse(element, true);

  return elements;
}