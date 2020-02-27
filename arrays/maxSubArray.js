/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = Number.MIN_SAFE_INTEGER;
        
    for (num of nums) {
        // max sum ending at current index
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};
