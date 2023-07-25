/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
  if (!items || items.length === 0) {
    return '';
  }

  if (items.length === 1) {
    return items[0]
  }

  let result = items.filter(item => item.length > 0);

  if (options?.unique) {
    result = Array.from(new Set(result));
  }

  if (options?.sorted) {
    result.sort();
  }

  let othersNumber = null;
  if (options?.length && options.length > 0) {
    othersNumber = result.length - options.length;
    result = result.slice(0, options.length);

    if (othersNumber && othersNumber > 0) {
      const isPlural = othersNumber > 1;
      return `${result.join(', ')} and ${othersNumber} other${isPlural ? 's' : ''}`;
    }
  }

  const lastItem = result[result.length - 1];
  return result
    .slice(0, result.length - 1)
    .join(', ')
    .concat(` and ${lastItem}`);
}