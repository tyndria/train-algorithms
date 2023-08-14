/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i; j < arr.length; j ++) {
      if (arr[j] < min) {
        minIndex = j;
        min = arr[j];
      }
    }

    let buff = arr[i];
    arr[i] = min;
    arr[minIndex] = buff;
  }

  return arr;
}