/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

// The simplest solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let sum = n * (n + 1) / 2;
    
    for (num of nums) {
        sum -= num;
    }
    
    return sum;
};

// Bit manipulation
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    return nums.reduce((acc, curr, index) => {
        return acc ^ curr ^ index
    }, nums.length)
};