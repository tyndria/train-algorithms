/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
  return function base(...args) {
    // to be able to apply the function normally without currying
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (...nextArgs) {
      return base.apply(this, [...args, ...nextArgs]);
    }
  }
}