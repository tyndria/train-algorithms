// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
  let maxDistance = 0;

  let rightMostIndex = colors.length - 1;

  let leftIndex = 0;
  let rightIndex = rightMostIndex;

  if (colors.length === 0) {
      return 0;
  }

  if (colors[0] !== colors[rightMostIndex]) {
      return Math.abs(0 - rightMostIndex)
  }

  while (colors[0] === colors[leftIndex] && leftIndex < colors.length - 1) {
      leftIndex ++;
  }

  maxDistance = Math.max(...[
      maxDistance,
      Math.abs(0 - leftIndex), 
      Math.abs(rightMostIndex - leftIndex)
  ])

  while (colors[rightMostIndex] === colors[rightIndex] && rightIndex > 0) {
      rightIndex --;
  }

  maxDistance = Math.max(...[
      maxDistance,
      Math.abs(rightMostIndex - rightIndex), 
      Math.abs(0 - rightIndex)
  ])

  return maxDistance;
};