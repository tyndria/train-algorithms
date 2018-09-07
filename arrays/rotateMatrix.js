/*

 48. Rotate Image

 You are given an n x n 2D matrix representing an image.

 Rotate the image by 90 degrees (clockwise).

 Note:

 You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 DO NOT allocate another 2D matrix and do the rotation.
* */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const size = matrix.length;
  const last = size - 1;

  for (let i = 0; i < (size / 2); i ++) {
    for (let j = i; j < last - i; j ++) {
      const first = matrix[i][j];
      const second = matrix[j][last - i];
      const third = matrix[last - i][last - j];

      matrix[i][j] = matrix[last - j][i];
      matrix[j][last - i] = first;
      matrix[last - i][last - j] = second;
      matrix[last - j][i] = third;
    }
  }
};