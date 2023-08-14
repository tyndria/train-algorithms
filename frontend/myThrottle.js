/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;

    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, wait)

    func.apply(this, args);
  }
}