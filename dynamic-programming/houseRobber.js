/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums.length) {
        return 0;
    }
    
    const dp = new Array(nums.length).fill(0);
    let result = 0;
    
    dp[0] = nums[0];
    if (nums.length === 1) {
        return dp[0];
    }
    
    dp[1] = nums[1];
    if (nums.length === 2) {
        return Math.max(dp[0], dp[1]);
    }
    
    dp[2] = dp[0] + nums[2];
    result = Math.max(dp[1], dp[2]);
    
    if (nums.length === 3) {
        return result;
    }
    
    for (let i = 3; i < nums.length; i ++) {
        dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
        result = Math.max(result, dp[i]);
    }
    
    return result;
};