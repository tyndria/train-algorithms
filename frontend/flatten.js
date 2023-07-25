// Recursive approach

export default function flatten(value) {
  const result = [];

  for (const element of value) {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  }

  return result;
}