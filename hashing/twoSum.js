/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


/* O(n) */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const indexesMap = {};

  for (const [firstNumIndex, firstNum] of nums.entries()) {
      const secondNum = target - firstNum;
      const secondNumIndex = indexesMap[secondNum];
      if (secondNumIndex !== undefined) {
          return [firstNumIndex, secondNumIndex];
      } else {
          indexesMap[firstNum] = firstNumIndex;
      }
  }
};


/* O(n^2) */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (const [firstNumberIndex, firstNumber] of nums.entries()) {
      for (const [secondNumberIndex, secondNumber] of nums.entries()) {
          if (firstNumberIndex === secondNumberIndex) {
              continue;
          }

          const potentialTarget = firstNumber + secondNumber;
          if (potentialTarget === target) {
              return [firstNumberIndex, secondNumberIndex];
          }
      }
  }
};