/**
 * @template T
 * @param { (value: T) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const array = this;
  const length = array.length;

  const newArray = [];

  for (let i = 0; i < length; i ++) {
    const isNotEmptySlot = i in array;
    if (isNotEmptySlot && callbackFn.call(thisArg, array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};