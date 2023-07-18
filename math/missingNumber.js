// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.



/**
 * @param {number[]} nums
 * @return {number}
 */

// 0, 1, 2, 3, 4, 5, ..., n
// (n + 1) * n / 2
var missingNumber = function(nums) {
  const actualSum = nums.reduce((sum, curr) => {
      sum += curr;
      return sum;
  }, 0);
  
  
  const n = nums.length;
  const expectedSum = n * (n + 1) / 2;
  
  return expectedSum - actualSum;
};