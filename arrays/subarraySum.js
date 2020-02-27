/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
*/

// O (n ^ 2)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const sums = [0];
    
    let sum = 0;
    for (num of nums) {
        sum += num;
        sums.push(sum);
    }
    
    let result = 0;

    for (let i = 0; i < sums.length; i ++) {
        for (let j = i + 1; j < sums.length; j ++) {
            if ((sums[j] - sums[i]) === k) {
                result += 1;
            }
        }
    }
    
    return result;
};

// O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// sums[i] - sums[j] = k;
// sums[i] - k = ?
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = {
        0: 1,
    };
    
    for (num of nums) {
        sum += num;
        
        if (map[sum - k]) {
            count += map[sum - k];
        }
        
        map[sum] = (map[sum] + 1) || 1;
    }
    
    return count;
};