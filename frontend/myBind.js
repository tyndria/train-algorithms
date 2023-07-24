/**
 * @param {any} thisArg
 * @param {...*} boundArgs
 */
Function.prototype.myBind = function (thisArg, ...boundArgs) {
  return (...args) => this.apply(thisArg, [...boundArgs, ...args]);
};