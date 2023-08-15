/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  if (value instanceof Object) {
    return Object.entries(value).reduce((prev, [k, v]) => {
      prev[k] = deepClone(v);
      return prev;
    }, {});
  }

  if (value instanceof Array) {
    return value.map(v => deepClone(v));
  }

  return value;
}